export interface List {
  id: number;
  name: string;
  createdBy: string;
  group: any; // Group -> Move to shared to avoid circular dependency
  items: ListItem[]
}

export interface CreateList {
  name: string;
  createdBy: string;
  group: number;
  items: CreateListItem[];
}

export interface ListItem {
  id: number;
  name: string;
  createdBy: string;
  isComplete: boolean;
  category: Category;
}

export interface CreateListItem {
  name: string;
  createdBy: string;
  isComplete: boolean;
  category: string;
  list?: number;
}

export interface Category {
  id: number;
  name: string;
}
