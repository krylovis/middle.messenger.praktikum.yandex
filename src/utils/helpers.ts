type Indexed<T = unknown> = {
  [key in string]: T;
};

export function isEqualValue<T>(lhs: T, rhs: T): boolean {
  return lhs === rhs;
}

function isArray(value: unknown): value is [] {
  return Array.isArray(value);
}

type PlainObject<T = unknown> = {
  [k in string]: T;
};

function isPlainObject(value: unknown): value is PlainObject {
  return typeof value === 'object'
    && value !== null
    && value.constructor === Object
    && Object.prototype.toString.call(value) === '[object Object]';
}

function isArrayOrObject(value: unknown): value is ([] | PlainObject) {
  return isPlainObject(value) || isArray(value);
}

export function isEqual<T>(lhs: T, rhs: T) {
  if (isArrayOrObject(lhs) && isArrayOrObject(rhs)) {
    if (Object.keys(lhs).length !== Object.keys(rhs).length) {
      return false;
    }

    for (const [key, value] of Object.entries(lhs)) {
      const rightValue = rhs[key as keyof T];

      if (isArrayOrObject(value) && isArrayOrObject(rightValue)) {
        if (isEqual(value, rightValue)) {
          continue;
        }

        return false;
      }

      if (value !== rightValue) {
        return false;
      }
    }
  }

  return true;
}

export function merge(lhs: PlainObject, rhs: PlainObject): PlainObject {
  for (const p in rhs) {
    if (!Object.prototype.hasOwnProperty.call(rhs, p)) {
      continue;
    }

    try {
      if (rhs[p]?.constructor === Object) {
        rhs[p] = merge(lhs[p] as PlainObject, rhs[p] as PlainObject);
      } else {
        lhs[p] = rhs[p];
      }
    } catch (e) {
      lhs[p] = rhs[p];
    }
  }

  return lhs;
}

export function set(object: Indexed | unknown, path: string, value: unknown): Indexed | unknown {
  if (typeof object !== 'object' || object === null) {
    return object;
  }

  if (typeof path !== 'string') {
    throw new Error('path must be string');
  }

  const result = path.split('.').reduceRight<Indexed>((acc, key) => ({
    [key]: acc,
  }), value as Record<string, unknown>);

  return merge(object as Indexed, result);
}
