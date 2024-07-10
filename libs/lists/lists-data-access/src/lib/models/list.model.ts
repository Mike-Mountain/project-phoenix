export interface List {
  id: number;
  name: string;
  createdBy: string;
  group: any; // Group -> Move to shared to avoid circular dependency
  items: ListItem[]
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
  list: number;
  category: string;
}

export interface Category {
  id: number;
  name: string;
}
