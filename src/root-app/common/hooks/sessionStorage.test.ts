import { renderHook, act } from '@testing-library/react';
import useSessionStorage from './sessionStorage';
import { Favorite } from '../types/favorite';

const key = 'test-key';

describe('useSessionStorage', () => {
  beforeEach(() => {
    sessionStorage.clear();
  });

  it('should initialize with default value', () => {
    const initialValue: Favorite[] = [];
    const { result } = renderHook(() => useSessionStorage(key));

    const [value] = result.current;

    expect(value).toEqual(initialValue);
  });

  it('should initialize with value from sessionStorage', () => {
    const initialValue: Favorite[] = [
      { id: '1', name: 'Test', state: '', domains: [], web_pages: [] },
    ];
    sessionStorage.setItem(key, JSON.stringify(initialValue));
    const { result } = renderHook(() => useSessionStorage(key));

    const [value] = result.current;

    expect(value).toEqual(initialValue);
  });

  it('should add a favorite', () => {
    const initialValue: Favorite[] = [];
    const newFavorite: Favorite = { id: '1', name: 'Test', state: '', domains: [], web_pages: [] };
    const { result } = renderHook(() => useSessionStorage(key, initialValue));

    const [, , addFavorite] = result.current;

    act(() => {
      addFavorite(newFavorite);
    });

    const [value] = result.current;
    expect(value).toEqual([newFavorite]);
  });

  it('should remove a favorite', () => {
    const initialValue: Favorite[] = [
      { id: '1', name: 'Test', state: '', domains: [], web_pages: [] },
    ];
    const { result } = renderHook(() => useSessionStorage(key, initialValue));

    const [, , , removeFavorite] = result.current;

    act(() => {
      removeFavorite('1');
    });

    const [value] = result.current;
    expect(value).toEqual([]);
  });

  it('should check if a favorite exists', () => {
    const initialValue: Favorite[] = [
      { id: '1', name: 'Test', state: '', domains: [], web_pages: [] },
    ];
    const { result } = renderHook(() => useSessionStorage(key, initialValue));

    const [, isExistingFavourite] = result.current;

    expect(isExistingFavourite('1')).toBe(true);
    expect(isExistingFavourite('2')).toBe(false);
  });

  it('should update sessionStorage when value changes', () => {
    const initialValue: Favorite[] = [];
    const newFavorite: Favorite = { id: '1', name: 'Test', state: '', domains: [], web_pages: [] };
    const { result } = renderHook(() => useSessionStorage(key, initialValue));

    const [, , addFavorite] = result.current;

    act(() => {
      addFavorite(newFavorite);
    });

    expect(sessionStorage.getItem(key)).toBe(JSON.stringify([newFavorite]));
  });
});
