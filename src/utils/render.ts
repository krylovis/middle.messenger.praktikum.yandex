import Block from "@/utils/Block/index";

export default function render(query:string, block: Block) {
  const root = document.querySelector(query);

  root?.appendChild(block.getContent());
  block.dispatchComponentDidMount();

  return root;
}
