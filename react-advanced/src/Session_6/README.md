# Session 6 - useMemo & useCallback Hooks

**Disclaimer:** The topics covered in this assignment (memoization, `useMemo`, and `useCallback`) have not yet been taught in class. I completed this assignment using my current knowledge and with some AI assistance to ensure it was submitted on time.

## Tasks Completed

1. **Big List Rendering**: Created a component (`BigList`) that renders 1,000 dummy products and measured the initial render time.
2. **Filtering with `useMemo`**: Added a search input to filter the product list and wrapped the filtering logic in `useMemo` to prevent unnecessary recalculations.
3. **Favorite Toggle with `useCallback`**: Built a `PlaylistManager` and `SongItem` component. Used `useCallback` and functional state updates to memoize the favorite toggle function, preventing all songs from re-rendering when only one is clicked.
4. **Performance Refactoring**: Refactored a poorly optimized component (`Task4`) that re-rendered a heavy list on every counter click. Used `React.memo`, `useMemo`, and `useCallback` to eliminate the UI lag when interacting with unrelated state.
