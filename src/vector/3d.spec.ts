import test from 'ava';
import { Vector } from './3d';

test('clone', (t) => {
  const v = new Vector(1, 2, 3);
  const { x, y, z } = v.clone();
  t.is(x, v.x);
  t.is(y, v.y);
  t.is(z, v.z);
});

test('set', (t) => {
  const v = new Vector(1, 2, 3);
  v.set({ x: -1, y: -2, z: -3 });
  t.is(v.x, -1);
  t.is(v.y, -2);
  t.is(v.z, -3);
});

test('equals', (t) => {
  const v = new Vector(1, 2, 3);
  t.is(v.equals({ x: 0, y: 0, z: 0 }), false);
  t.is(v.equals({ x: 1, y: 1, z: 3 }), false);
  t.is(v.equals({ x: 0, y: 2, z: 3 }), false);
  t.is(v.equals({ x: 1.0, y: 2.0, z: 3.000001 }), true);
});

test('length', (t) => {
  const v = new Vector(3, 4, 5);
  t.is(v.length(), Math.sqrt(v.squaredLength()));
});

test('squaredLength', (t) => {
  const v = new Vector(3, 4, 5);
  t.is(v.squaredLength(), 50);
});

test('dot', (t) => {
  const a = new Vector(1, 2, 3);
  t.is(a.dot(a), a.squaredLength());
});

test('scale', (t) => {
  const a = new Vector(1, 2, 3);
  const b = a.scale(2);
  t.is(b.x, 2);
  t.is(b.y, 4);
  t.is(b.z, 6);
});

test('add', (t) => {
  const a = new Vector(1, 2, 3);
  const b = new Vector(4, 5, 6);
  const c = a.add(b);

  t.is(c.x, 5);
  t.is(c.y, 7);
  t.is(c.z, 9);
});

test('sub', (t) => {
  const a = new Vector(1, 2, 3);
  const b = new Vector(4, 5, 6);
  const c = a.sub(b);

  t.is(c.x, -3);
  t.is(c.y, -3);
  t.is(c.z, -3);
});

test('mul', (t) => {
  const a = new Vector(1, -2, -3);
  const b = new Vector(-4, 5, -6);
  const c = a.mul(b);

  t.is(c.x, -4);
  t.is(c.y, -10);
  t.is(c.z, 18);
});
