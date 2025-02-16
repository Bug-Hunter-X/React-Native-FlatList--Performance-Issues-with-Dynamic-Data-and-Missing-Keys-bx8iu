# React Native FlatList Key Management Bug

This repository demonstrates a common performance issue in React Native's `FlatList` component when dealing with large datasets and dynamically updating items.  Without proper key management, the `FlatList` can exhibit erratic behavior, including item flickering, disappearing items, and incorrect item ordering.

The `bug.js` file shows the problematic implementation. The `bugSolution.js` file provides the corrected version with unique keys implemented.