namespace TreeTypes {
  type TreeNode = {
    previous: Number | undefined | null;
    content: String;
  };

  type TreeLayer = Array<TreeNode>;
}

export { TreeTypes };
