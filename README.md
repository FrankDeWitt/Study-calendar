# Weekly Schedule Planner

A dynamic and interactive weekly schedule planner built with Nuxt 3, Vue 3, and Tailwind CSS. This application allows users to organize and manage their weekly activities with a drag-and-drop interface.

## Features 🌟

- **Drag & Drop Interface**: Easily reorganize activities between different days
- **Persistent Storage**: All changes are automatically saved both locally and in JSON
- **Responsive Design**: Works seamlessly on both desktop and mobile devices
- **Activity Management**:
    - Add new activities through a modal form
    - Delete activities with confirmation
    - Modify existing activities
- **Modern UI/UX**:
    - Color-coded activities by type
    - Interactive cards with hover effects
    - Smooth animations and transitions
    - Confirmation dialogs for important actions

## Tech Stack 🛠️

- **Framework**: Nuxt 3
- **UI Library**: Vue 3 (Composition API)
- **State Management**: Pinia
- **Styling**: Tailwind CSS
- **Drag & Drop**: vue-draggable-next
- **Type Safety**: TypeScript

## Prerequisites 📦

- Node.js (v16 or higher)
- pnpm (v7 or higher)

## Installation 🚀

```bash
git clone https://github.com/yourusername/weekly-schedule-planner.git
cd weekly-schedule-planner
pnpm install
pnpm dev
pnpm build
```

## Project Structure 🏗️
```bash
├── components/
│   ├── ui/
│   │   ├── UiModal.vue
│   │   └── UiConfirmModal.vue
│   ├── ActivityForm.vue
│   └── SchedulePlanner.vue
├── stores/
│   └── schedule.ts
├── types/
│   └── schedule.ts
└── data/
    └── schedule.json
```

## Usage 💡

### Adding Activities 📝

#### Add a New Activity
Click the "+" button located in the bottom right corner of the screen to open the activity form modal.

#### Fill Activity Details
1. **Day Selection**
- Choose a day of the week from the dropdown menu
- Options: Monday through Sunday

2. **Activity Information**
- **Name**: Enter the activity name
- **Time**: Specify the time slot
- **Duration**: Set the activity duration
- **Type**: Select from:
    - Japanese (🎌)
    - TypeScript (📘)
    - Hacking (💻)

3. **Save Activity**
- Click "Add Activity" to save
- A confirmation will appear when successful

### Managing Activities 🔄

#### Drag & Drop
- Click and hold any activity card
- Drag it to another day
- Release to drop
- Activities can be reordered within the same day

#### Delete Activities
1. Hover over an activity card
2. Click the delete icon (×) that appears
3. Confirm deletion in the popup modal

### Activity Types & Colors 🎨

Activities are color-coded for easy identification:
- **Japanese**: Pink background
- **TypeScript**: Blue background
- **Hacking**: Green background

### Data Persistence 💾

All changes are automatically saved:
- Locally in the browser
- In the JSON configuration file
- No manual saving required

### Upcoming Features 🚀

- Activity editing
- Time conflict detection
- Activity duplication
- Weekly templates
## License 📄

### MIT License

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

- The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
- The Software is provided "as is", without warranty of any kind.

See the [LICENSE](LICENSE) file for the full license text.

## Acknowledgments ✨

### Core Technologies

- **[Nuxt 3](https://nuxt.com/)** - The Intuitive Web Framework
- Built on Vue 3
- Full TypeScript support
- Auto-imports and module system

- **[Tailwind CSS](https://tailwindcss.com/)** - A Utility-First CSS Framework
- Highly customizable
- Zero-runtime overhead
- Responsive design system

- **[vue-draggable-next](https://github.com/SortableJS/vue.draggable.next)** - Drag & Drop Component
- Vue 3 compatible
- Based on Sortable.js
- Smooth animations