interface FileNode {
  type: 'file'
}

interface FolderNode {
  type: 'folder'
  children: Record<string, FileNode | FolderNode>
}

export type TreeNode = FileNode | FolderNode

export interface TreeData {
  root: Record<string, TreeNode>
}
