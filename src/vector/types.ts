export type Point2d = {
  x: number;
  y: number;
};

export type Point3d = Point2d & {
  z: number;
};

export type IVector<T extends Point2d> = T & {
  clone(): IVector<T>;

  set(v: T): IVector<T>;

  /**
   * Checks if two vectors are equal, using a threshold to avoid floating-point precision errors.
   */
  equals(p: T, threshold: number): boolean;

  /**
   * Returns the distance from the vector to the origin.
   */
  length(): number;

  /**
   * Returns the distance from the vector to the origin, squared.
   */
  squaredLength(): number;

  /**
   * Calculates the dot product of two vectors
   */
  dot(p: T): number;

  /**
   * Scales a vector by a scalar parameter.
   */
  scale(n: number): IVector<T>;

  /**
   * Adds two vectors together.
   */
  add(p: T): IVector<T>;

  /**
   * Subtracts one vector from another.
   */
  sub(p: T): IVector<T>;

  /**
   * Multiplies two vectors piecewise.
   */
  mul(p: T): IVector<T>;

  /**
   * Returns the cross product of this vector by another.
   */
  cross(p: T): IVector<Point2d>;

  /**
   * Return veactor as string
   */
  toString(): string;
};
