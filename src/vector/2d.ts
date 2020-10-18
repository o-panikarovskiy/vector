import { Point2d, IVector } from './types';

export const epsilon = 0.00001;

export class Vector implements IVector<Point2d> {
  constructor(public x: number, public y: number) {}

  clone(): IVector<Point2d> {
    return new Vector(this.x, this.y);
  }

  set(p: Point2d): IVector<Point2d> {
    Object.assign(this, p);
    return this;
  }

  equals(p: Point2d, threshold = epsilon): boolean {
    if (Math.abs(this.x - p.x) > threshold) {
      return false;
    }

    if (Math.abs(this.y - p.y) > threshold) {
      return false;
    }

    return true;
  }

  length(): number {
    return Math.sqrt(this.squaredLength());
  }

  squaredLength(): number {
    const { x, y } = this;
    return x * x + y * y;
  }

  dot(p: Point2d): number {
    return this.x * p.x + this.y * p.y;
  }

  scale(n: number): IVector<Point2d> {
    return new Vector(this.x * n, this.y * n);
  }

  add(p: Point2d): IVector<Point2d> {
    return new Vector(this.x + p.x, this.y + p.y);
  }

  sub(p: Point2d): IVector<Point2d> {
    return new Vector(this.x - p.x, this.y - p.y);
  }

  mul(p: Point2d): IVector<Point2d> {
    return new Vector(this.x * p.x, this.y * p.y);
  }

  cross(p: Point2d): IVector<Point2d> {
    throw new TypeError('Not defined.');
  }

  toString(): string {
    return `(${this.x},${this.y})`;
  }
}
