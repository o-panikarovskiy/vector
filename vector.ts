export const epsilon = 0.00001;

export interface IPoint {
  x: number;
  y: number;
}

export interface IVector extends IPoint {
  clone(): IVector;

  set(x?: number, y?: number): IVector;

  /**
   * Checks if two vectors are equal, using a threshold to avoid floating-point precision errors.
   * @param {IPoint} p
   * @param {number} threshold
   * @returns {boolean}
   */
  equals(p: IPoint, threshold: number): boolean;

  /**
   * Returns the distance from the vector to the origin.
   * @returns {number}
   */
  length(): number;

  /**
   * Returns the distance from the vector to the origin, squared.
   * @returns {number}
   */
  squaredLength(): number;

  /**
   * Calculates the dot product of two vectors
   * @param {IPoint} p
   * @returns {number} The dot product of the two vectors
   */
  dot(p: IVector): number;

  /**
   * Scales a vector by a scalar parameter.
   * @param {number} n
   * @returns {IVector}
   */
  scale(n: number): IVector;

  /**
   * Adds two vectors together.
   * @param {IPoint} v
   * @returns {IVector}
   */
  add(p: IPoint): IVector;

  /**
   * Subtracts one vector from another.
   * @param {IPoint} v
   * @returns {IVector}
   */
  sub(p: IPoint): IVector;

  /**
   * Multiplies two vectors piecewise.
   * @param {IPoint} v
   * @returns {IVector}
   */
  mul(p: IPoint): IVector;
}

export class Vector implements IVector {
  constructor(public x: number, public y: number) {}

  public clone = (): IVector => {
    return new Vector(this.x, this.y);
  };

  public set = (x?: number, y?: number): IVector => {
    if (typeof x === 'number') {
      this.x = x;
    }

    if (typeof y === 'number') {
      this.y = y;
    }

    return this;
  };

  public equals = (p: IPoint, threshold = epsilon): boolean => {
    if (Math.abs(this.x - p.x) > threshold) {
      return false;
    }

    if (Math.abs(this.y - p.y) > threshold) {
      return false;
    }

    return true;
  };

  public length = (): number => {
    return Math.sqrt(this.squaredLength());
  };

  public squaredLength = (): number => {
    const { x, y } = this;
    return x * x + y * y;
  };

  public dot = (p: IPoint): number => {
    return this.x * p.x + this.y * p.y;
  };

  public scale = (n: number): IVector => {
    return new Vector(this.x * n, this.y * n);
  };

  public add = (p: IPoint): IVector => {
    return new Vector(this.x + p.x, this.y + p.y);
  };

  public sub = (p: IPoint): IVector => {
    return new Vector(this.x - p.x, this.y - p.y);
  };

  public mul = (p: IPoint): IVector => {
    return new Vector(this.x * p.x, this.y * p.y);
  };

  public toString(): string {
    return '(' + this.x + ', ' + this.y + ')';
  }
}
