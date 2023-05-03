# Algos

Some algorithms coded in JS.

## Hours.js

`yarn start-hours`

**TO-DO: rewrite in English.**

На вход даётся массив с временными периодами, в которые работник не присутствовал на рабочем месте. Период состоит из двух _целых_ чисел: час начала перерыва у работника и час окончания перерыва. Нужно вывести временные периоды, в которые все работники были на рабочем месте. Рабочий день - с 9 до 18.

Input:

```
[ [10, 11], [15, 17], [10, 12], [14, 16], ]
```

Output:

```
[ [9, 10], [12, 14], [17, 18] ]
```

## Path.js

`yarn start-path`

**TO-DO: rewrite in English.**

На вход даётся массив билетов - объектов с двумя полями: from и to. Значения полей - города, из которых и в которые был совершён переезд. Города _не могут повторяться_. Необходимо установить маршрут по данным билетам.

Input:

```
[
  { from: "Moscow", to: "Belgrade" },
  { from: "New York", to: "Paris" },
  { from: "Astana", to: "Dubai" },
  { from: "Singapore", to: "Moscow" },
  { from: "Dubai", to: "New York" },
  { from: "Belgrade", to: "Astana" },
  { from: "Dublin", to: "Singapore" },
]
```

Output:

```
[
  { from: 'Dublin', to: 'Singapore' },
  { from: 'Singapore', to: 'Moscow' },
  { from: 'Moscow', to: 'Belgrade' },
  { from: 'Belgrade', to: 'Astana' },
  { from: 'Astana', to: 'Dubai' },
  { from: 'Dubai', to: 'New York' },
  { from: 'New York', to: 'Paris' }
]
```
