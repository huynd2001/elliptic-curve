abstract class GroupElement<T> {
  protected value: T;
  protected field: Group<T>;

  protected constructor(value: T, field: Group<T>) {
    this.value = value;
    this.field = field;
  }

  getValue: () => T = () => {
    return this.value;
  };

  getField: () => Group<T> = () => {
    return this.field;
  };

  abstract equals: (other: FieldElement<T>) => boolean;
}

abstract class Group<T> {
  protected name: string;

  protected constructor(name: string) {
    this.name = name;
  }

  getName: () => string = () => {
    return this.name;
  };

  abstract add: (a: GroupElement<T>, b: GroupElement<T>) => GroupElement<T>;

  abstract neg: (a: GroupElement<T>) => GroupElement<T>;

  sub = (a: GroupElement<T>, b: GroupElement<T>): GroupElement<T> => {
    return this.add(a, this.neg(b));
  };

  abstract id: () => GroupElement<T>;
}
