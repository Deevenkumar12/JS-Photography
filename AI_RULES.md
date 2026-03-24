# AI Rules for Application Development

## Tech Stack
- React with TypeScript
- React Router for client-side routing
- shadcn/ui for prebuilt UI components
- Tailwind CSS for styling
- Lucide-react for icons

## Library Usage Rules
1. **shadcn/ui**: Use prebuilt components from this library. Do not modify existing shadcn files.
2. **Tailwind CSS**: Handle all styling through Tailwind classes. No inline styles or CSS modules.
3. **React Router**: Keep all routes in `src/App.tsx`. Don't create separate route files.
4. **Lucide-react**: Use for icons only. Don't create custom icon components.
5. **Custom Components**: Create new components in `src/components/` for app-specific logic.
6. **No External Libraries**: Only use packages already installed (shadcn/ui, lucide-react, etc.).
7. **Code Organization**: Keep pages in `src/pages/`, components in `src/components/`.