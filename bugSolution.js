The solution involves ensuring each item in your `FlatList` has a unique key.  This key should ideally be a stable, unique identifier associated with each item in your data.  It's crucial that this key remains constant even if other properties of the item change.

```javascript
//Corrected component
<FlatList
  data={myData}
  keyExtractor={(item) => item.id}
  renderItem={({ item }) => <MyComplexItem item={item} />}
/>
```

By adding the `keyExtractor` prop, we provide `FlatList` with a function that returns a unique key for each item.  This allows React Native's diffing algorithm to correctly identify changes and perform updates efficiently, resolving the flickering and reordering issues.