import { Point3d, IVector } from './types';

export const epsilon = 0.00001;

export class Vector implements IVector<Point3d> {
  constructor(public x: number, public y: number, public z: number) {}

  clone(): IVector<Point3d> {
    return new Vector(this.x, this.y, this.z);
  }

  set(p: Point3d): IVector<Point3d> {
    Object.assign(this, p);
    return this;
  }

  equals(p: Point3d, threshold = epsilon): boolean {
    if (Math.abs(this.x - p.x) > threshold) {
      return false;
    }

    if (Math.abs(this.y - p.y) > threshold) {
      return false;
    }

    if (Math.abs(this.z - p.z) > threshold) {
      return false;
    }

    return true;
  }

  length(): number {
    return Math.sqrt(this.squaredLength());
  }

  squaredLength(): number {
    const { x, y, z } = this;
    return x * x + y * y + z * z;
  }

  dot(p: Point3d): number {
    return this.x * p.x + this.y * p.y + this.z * p.z;
  }

  scale(n: number): IVector<Point3d> {
    return new Vector(this.x * n, this.y * n, this.z * n);
  }

  add(p: Point3d): IVector<Point3d> {
    return new Vector(this.x + p.x, this.y + p.y, this.z + p.z);
  }

  sub(p: Point3d): IVector<Point3d> {
    return new Vector(this.x - p.x, this.y - p.y, this.z - p.z);
  }

  mul(p: Point3d): IVector<Point3d> {
    return new Vector(this.x * p.x, this.y * p.y, this.z * p.z);
  }

  cross(p: Point3d): IVector<Point3d> {
    const { x: x1, y: y1, z: z1 } = this;
    const { x: x2, y: y2, z: z2 } = p;

    return new Vector(
      y1 * z2 - z1 * y2, //
      z1 * x2 - x1 * z2,
      x1 * y2 - y1 * x2
    );
  }

  toString(): string {
    return `(${this.x},${this.y},${this.z})`;
  }
}
