import Block from "@/utils/Block/index";

export default function render(query:string, block: Block) {
  const root = document.querySelector(query);

  root?.appendChild(block.getContent() as HTMLElement);
  block.dispatchComponentDidMount();

  return root;
}
