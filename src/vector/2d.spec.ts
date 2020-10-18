import test from 'ava';
import { Vector } from './2d';

test('clone', (t) => {
  const v = new Vector(1, 2);
  const { x, y } = v.clone();
  t.is(x, v.x);
  t.is(y, v.y);
});

test('set', (t) => {
  const v = new Vector(1, 2);
  v.set({ x: 0, y: -1 });
  t.is(v.x, 0);
  t.is(v.y, -1);
});

test('equals', (t) => {
  const v = new Vector(1, 2);
  t.is(v.equals({ x: 0, y: 0 }), false);
  t.is(v.equals({ x: 1, y: 1 }), false);
  t.is(v.equals({ x: 0, y: 2 }), false);
  t.is(v.equals({ x: 1.0, y: 2.0 }), true);
});

test('length', (t) => {
  const v = new Vector(3, 4);
  t.is(v.length(), 5);
});

test('squaredLength', (t) => {
  const v = new Vector(3, 4);
  t.is(v.squaredLength(), 25);
});

test('dot', (t) => {
  const a = new Vector(1, 2);
  const b = new Vector(3, 4);
  t.is(a.dot(b), 11);
});

test('scale', (t) => {
  const a = new Vector(1, 2);
  const b = a.scale(2);
  t.is(b.x, 2);
  t.is(b.y, 4);
});

test('add', (t) => {
  const a = new Vector(1, 2);
  const b = new Vector(4, 5);
  const c = a.add(b);

  t.is(c.x, 5);
  t.is(c.y, 7);
});

test('sub', (t) => {
  const a = new Vector(1, 3);
  const b = new Vector(4, 3);
  const c = a.sub(b);

  t.is(c.x, -3);
  t.is(c.y, 0);
});

test('mul', (t) => {
  const a = new Vector(2, 3);
  const b = new Vector(4, -3);
  const c = a.mul(b);

  t.is(c.x, 8);
  t.is(c.y, -9);
});
