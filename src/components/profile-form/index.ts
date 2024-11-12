import Block, { IData } from '@/utils/Block';
import { connectWithUser } from '@/utils/connects';
import { profileFormTemplate } from './template';

class ProfileForm extends Block<IData> {
  public componentBeforeMount(newElement: HTMLElement): void {
    if (this.props.currentUser) {
      for (const key of Object.keys(this.props.currentUser)) {
        const input = newElement?.querySelector(`input[name="${key}"]`) as HTMLInputElement;

        if (input) {
          const value: string = (this.props.currentUser as Record<string, string>)[key];
          input.value = value || '';
        }
      }
    }
  }

  render() {
    return profileFormTemplate;
  }
}

export default connectWithUser(ProfileForm)
