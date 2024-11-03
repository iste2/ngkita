export interface Facility {
  id: string;
  name: string;
}

export interface KiBizGroup {
  facility?: Facility;
  size1A: number;
  size1B: number;
  size1C: number;
  size2A: number;
  size2B: number;
  size2C: number;
  size3A: number;
  size3B: number;
  size3C: number;
  dateRange: Date[];
  id?: string;
}
