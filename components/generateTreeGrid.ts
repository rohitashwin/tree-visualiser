import { TreeTypes } from "../tree-types";

export function generateTreeGrid(
  tree: Array<TreeTypes.TreeLayer>,
): Array<Array<TreeTypes.TreeNode | null>> {
  let numLayers = tree.length;
  let maxWidth = 0;
  for (let i = 0; i < numLayers; i++) {
    if (tree[i].length > maxWidth) {
      maxWidth = tree[i].length;
    }
  }
  // if max width is not odd, add 1 to it so that the root node is centered
  if (maxWidth % 2 === 0) {
    maxWidth++;
  }
  // assert that the first layer has only one node
  if (tree[0].length !== 1) {
    throw new Error("First layer must have only one node");
  }
  let grid: Array<Array<TreeTypes.TreeNode | null>> = new Array(numLayers);
  for (let i = 0; i < numLayers; i++) {
    grid[i] = new Array(maxWidth);
    let currentLayer = tree[i];
    let currentLayerWidth = currentLayer.length;
    let spacing = maxWidth - currentLayerWidth;
    let leftPadding = Math.floor(spacing / 2);
    let rightPadding = Math.ceil(spacing / 2);
    for (let j = 0; j < leftPadding; j++) {
      grid[i][j] = null;
    }
    for (let j = 0; j < currentLayerWidth; j++) {
      grid[i][leftPadding + j] = currentLayer[j];
    }
    for (let j = 0; j < rightPadding; j++) {
      grid[i][leftPadding + currentLayerWidth + j] = null;
    }
  }
}
