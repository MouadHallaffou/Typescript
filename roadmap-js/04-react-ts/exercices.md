# 💪 Exercices React TypeScript

## 📝 Instructions

- Prérequis : React et TypeScript maîtrisés
- Créez une nouvelle app React TypeScript (`npx create-react-app my-app --template typescript`)
- Testez chaque composant créé
- Ne consultez les solutions qu'après avoir essayé
- Commentez votre code pour expliquer votre raisonnement

---

## 🟨 Niveau 1 - Composants de base

### Exercice 1 : Premier composant typé

Créez un composant `Greeting` avec des props typées :

```typescript
// Interface pour les props
interface GreetingProps {
  // Définissez les propriétés nécessaires
}

// Composant à implémenter
const Greeting: React.FC<GreetingProps> = (props) => {
  // Implémentez le composant
};

// Test
<Greeting name="Alice" age={25} isActive={true} />
```

### Exercice 2 : Props et interfaces

Créez un composant `UserCard` avec des props complexes :

```typescript
// Interfaces à définir
interface User {
  // Définissez la structure d'un utilisateur
}

interface UserCardProps {
  // Définissez les props du composant
}

// Composant à implémenter
const UserCard: React.FC<UserCardProps> = ({ user, onEdit, onDelete }) => {
  // Implémentez le composant avec gestion des événements
};

// Test
const user: User = {
  id: 1,
  name: "Alice",
  email: "alice@example.com",
  avatar: "https://example.com/avatar.jpg",
  role: "admin"
};

<UserCard 
  user={user} 
  onEdit={(id) => console.log('Edit user:', id)}
  onDelete={(id) => console.log('Delete user:', id)}
/>
```

### Exercice 3 : État local avec useState

Créez un composant `Counter` avec état typé :

```typescript
// Interface pour l'état
interface CounterState {
  // Définissez la structure de l'état
}

// Composant à implémenter
const Counter: React.FC = () => {
  // Utilisez useState avec des types appropriés
  // Implémentez les fonctions d'incrémentation/décrémentation
};

// Test
<Counter />
```

### Exercice 4 : Gestion d'événements typés

Créez un composant `Form` avec gestion d'événements typés :

```typescript
// Interfaces à définir
interface FormData {
  // Définissez la structure des données du formulaire
}

interface FormProps {
  // Définissez les props du composant
}

// Composant à implémenter
const Form: React.FC<FormProps> = ({ onSubmit, initialData }) => {
  // Implémentez le formulaire avec gestion d'événements typés
};

// Test
const initialData: FormData = {
  name: "",
  email: "",
  message: ""
};

<Form 
  onSubmit={(data) => console.log('Form submitted:', data)}
  initialData={initialData}
/>
```

### Exercice 5 : Composants enfants typés

Créez un système de composants parents/enfants typés :

```typescript
// Interfaces à définir
interface TabProps {
  // Props pour un onglet individuel
}

interface TabsProps {
  // Props pour le conteneur d'onglets
}

// Composants à implémenter
const Tab: React.FC<TabProps> = ({ children, isActive, onClick }) => {
  // Implémentez le composant onglet
};

const Tabs: React.FC<TabsProps> = ({ children, activeTab, onTabChange }) => {
  // Implémentez le conteneur d'onglets
};

// Test
<Tabs activeTab={0} onTabChange={(index) => console.log('Tab changed:', index)}>
  <Tab isActive={true} onClick={() => {}}>Onglet 1</Tab>
  <Tab isActive={false} onClick={() => {}}>Onglet 2</Tab>
</Tabs>
```

---

## 🟧 Niveau 2 - Hooks et logique

### Exercice 6 : Custom hooks typés

Créez un hook personnalisé `useLocalStorage` :

```typescript
// Hook à implémenter
function useLocalStorage<T>(key: string, initialValue: T) {
  // Implémentez le hook avec gestion du localStorage
  // Retournez [value, setValue] typés
}

// Test
const [user, setUser] = useLocalStorage<User>('user', {
  name: '',
  email: ''
});

console.log(user); // User | null
setUser({ name: 'Alice', email: 'alice@example.com' });
```

### Exercice 7 : useReducer avec types

Créez un gestionnaire d'état avec `useReducer` :

```typescript
// Types à définir
interface Todo {
  // Structure d'une tâche
}

interface TodoState {
  // État global des tâches
}

type TodoAction = 
  | { type: 'ADD_TODO'; payload: Todo }
  | { type: 'TOGGLE_TODO'; payload: number }
  | { type: 'DELETE_TODO'; payload: number }
  | { type: 'CLEAR_COMPLETED' };

// Reducer à implémenter
const todoReducer = (state: TodoState, action: TodoAction): TodoState => {
  // Implémentez la logique du reducer
};

// Hook personnalisé
function useTodos() {
  // Utilisez useReducer avec le reducer typé
}

// Test
const { todos, addTodo, toggleTodo, deleteTodo } = useTodos();
```

### Exercice 8 : useEffect avec dépendances typées

Créez un hook pour la gestion des données asynchrones :

```typescript
// Interfaces à définir
interface ApiResponse<T> {
  // Structure de réponse API
}

interface UseApiOptions {
  // Options pour le hook
}

// Hook à implémenter
function useApi<T>(
  url: string, 
  options?: UseApiOptions
) {
  // Implémentez le hook avec useEffect
  // Gestion des états loading, error, data
}

// Test
const { data, loading, error } = useApi<User[]>('/api/users');
```

### Exercice 9 : useCallback et useMemo typés

Optimisez des composants avec des hooks de performance :

```typescript
// Composant à implémenter
const ExpensiveComponent: React.FC<{ items: Item[]; filter: string }> = ({ 
  items, 
  filter 
}) => {
  // Utilisez useMemo pour filtrer les éléments
  // Utilisez useCallback pour les fonctions de gestion d'événements
  
  const filteredItems = useMemo(() => {
    // Logique de filtrage coûteuse
  }, [items, filter]);

  const handleItemClick = useCallback((id: number) => {
    // Gestion du clic
  }, []);

  // Rendu du composant
};
```

### Exercice 10 : Context API typé

Créez un contexte typé pour la gestion d'état globale :

```typescript
// Interfaces à définir
interface ThemeContextType {
  // Type du contexte de thème
}

interface ThemeProviderProps {
  // Props du provider
}

// Contexte à créer
const ThemeContext = React.createContext<ThemeContextType | undefined>(undefined);

// Provider à implémenter
const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  // Implémentez le provider avec état et fonctions
};

// Hook personnalisé pour utiliser le contexte
function useTheme() {
  // Implémentez le hook avec vérification du contexte
}

// Composant consommateur
const ThemedButton: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  // Implémentez le bouton avec le thème
};
```

---

## 🟨 Niveau 3 - Composants avancés

### Exercice 11 : Higher-Order Components (HOC)

Créez un HOC pour l'authentification :

```typescript
// Interfaces à définir
interface WithAuthProps {
  // Props ajoutées par le HOC
}

interface ComponentProps {
  // Props du composant original
}

// HOC à implémenter
function withAuth<P extends object>(
  Component: React.ComponentType<P & WithAuthProps>
) {
  // Implémentez le HOC avec vérification d'authentification
}

// Composant à wrapper
const ProfilePage: React.FC<ProfileProps & WithAuthProps> = ({ user, ...props }) => {
  // Implémentez la page de profil
};

// Utilisation
const AuthenticatedProfile = withAuth(ProfilePage);
```

### Exercice 12 : Render Props pattern

Implémentez le pattern render props :

```typescript
// Interfaces à définir
interface DataFetcherProps<T> {
  // Props du composant DataFetcher
}

interface DataFetcherState<T> {
  // État du composant DataFetcher
}

// Composant à implémenter
class DataFetcher<T> extends React.Component<
  DataFetcherProps<T>, 
  DataFetcherState<T>
> {
  // Implémentez le composant avec render props
}

// Utilisation
<DataFetcher<User[]> url="/api/users">
  {({ data, loading, error }) => (
    // Rendu conditionnel basé sur l'état
  )}
</DataFetcher>
```

### Exercice 13 : Composants génériques

Créez un composant de liste générique :

```typescript
// Interfaces à définir
interface ListProps<T> {
  // Props génériques pour la liste
}

interface ListItemProps<T> {
  // Props pour un élément de liste
}

// Composants à implémenter
const List = <T extends { id: number | string }>({
  items,
  renderItem,
  onItemClick,
  ...props
}: ListProps<T>) => {
  // Implémentez le composant de liste générique
};

// Utilisation
<List<User>
  items={users}
  renderItem={(user) => <UserCard user={user} />}
  onItemClick={(user) => console.log('Clicked:', user)}
/>
```

### Exercice 14 : Composants avec refs

Créez un composant avec gestion des refs :

```typescript
// Interfaces à définir
interface InputWithFocusProps {
  // Props du composant
}

// Composant à implémenter avec forwardRef
const InputWithFocus = React.forwardRef<HTMLInputElement, InputWithFocusProps>(
  (props, ref) => {
    // Implémentez le composant avec ref
  }
);

// Composant parent
const FormWithFocus: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  
  const focusInput = useCallback(() => {
    inputRef.current?.focus();
  }, []);

  // Implémentez le formulaire avec focus
};
```

### Exercice 15 : Composants avec Error Boundaries

Implémentez un Error Boundary typé :

```typescript
// Interfaces à définir
interface ErrorBoundaryState {
  // État de l'Error Boundary
}

interface ErrorBoundaryProps {
  // Props de l'Error Boundary
}

// Composant à implémenter
class ErrorBoundary extends React.Component<
  ErrorBoundaryProps, 
  ErrorBoundaryState
> {
  // Implémentez les méthodes de cycle de vie
  // componentDidCatch, getDerivedStateFromError
  
  render() {
    // Rendu conditionnel basé sur l'état d'erreur
  }
}

// Composant qui peut générer une erreur
const BuggyComponent: React.FC = () => {
  // Composant qui peut lever une exception
};

// Utilisation
<ErrorBoundary fallback={<div>Something went wrong</div>}>
  <BuggyComponent />
</ErrorBoundary>
```

---

## 🟦 Niveau 4 - Intégration avec des librairies

### Exercice 16 : React Router avec TypeScript

Créez une application avec React Router typé :

```typescript
// Interfaces à définir
interface RouteParams {
  // Paramètres de route
}

interface RouteState {
  // État de navigation
}

// Composants à implémenter
const App: React.FC = () => {
  // Configurez les routes avec types
};

const UserProfile: React.FC<RouteComponentProps<RouteParams>> = ({ 
  match, 
  history 
}) => {
  // Implémentez la page de profil utilisateur
};

const Navigation: React.FC = () => {
  // Implémentez la navigation typée
};
```

### Exercice 17 : Redux Toolkit avec TypeScript

Implémentez un store Redux typé :

```typescript
// Interfaces à définir
interface RootState {
  // État global de l'application
}

interface UserSlice {
  // Slice pour la gestion des utilisateurs
}

// Slice à implémenter
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // Définissez les reducers typés
  }
});

// Hook personnalisé
function useAppDispatch() {
  return useDispatch<AppDispatch>();
}

function useAppSelector<T>(selector: (state: RootState) => T) {
  return useSelector<RootState, T>(selector);
}

// Composant connecté
const UserList: React.FC = () => {
  const users = useAppSelector(state => state.user.users);
  const dispatch = useAppDispatch();
  
  // Implémentez le composant avec Redux
};
```

### Exercice 18 : React Query avec TypeScript

Implémentez la gestion de données avec React Query :

```typescript
// Interfaces à définir
interface QueryKeys {
  // Clés de requête typées
}

interface MutationOptions<T> {
  // Options de mutation
}

// Hooks personnalisés
function useUsers() {
  return useQuery<User[], Error>({
    queryKey: ['users'],
    queryFn: fetchUsers,
  });
}

function useCreateUser() {
  return useMutation<User, Error, CreateUserData>({
    mutationFn: createUser,
    onSuccess: () => {
      // Invalidation du cache
    },
  });
}

// Composant avec React Query
const UserManagement: React.FC = () => {
  const { data: users, isLoading, error } = useUsers();
  const createUserMutation = useCreateUser();
  
  // Implémentez la gestion des utilisateurs
};
```

---

## 🟪 Niveau 5 - Patterns avancés

### Exercice 19 : Compound Components

Créez un système de composants composés :

```typescript
// Interfaces à définir
interface SelectProps {
  // Props du composant Select
}

interface SelectContextType {
  // Contexte pour les composants composés
}

// Composants à implémenter
const Select: React.FC<SelectProps> & {
  Option: React.FC<OptionProps>;
  Trigger: React.FC<TriggerProps>;
} = ({ children, value, onChange }) => {
  // Implémentez le composant principal
};

Select.Option = ({ children, value }) => {
  // Implémentez le composant Option
};

Select.Trigger = ({ children }) => {
  // Implémentez le composant Trigger
};

// Utilisation
<Select value={selectedValue} onChange={setSelectedValue}>
  <Select.Trigger>Choisir une option</Select.Trigger>
  <Select.Option value="option1">Option 1</Select.Option>
  <Select.Option value="option2">Option 2</Select.Option>
</Select>
```

### Exercice 20 : Custom Hooks avancés

Créez des hooks personnalisés complexes :

```typescript
// Hook pour la gestion des formulaires
function useForm<T extends Record<string, any>>(initialValues: T) {
  // Implémentez la gestion d'état du formulaire
  // Validation, soumission, reset
}

// Hook pour la gestion des modales
function useModal() {
  // Implémentez la gestion des modales
  // Ouverture, fermeture, état
}

// Hook pour la gestion des notifications
function useNotifications() {
  // Implémentez la gestion des notifications
  // Ajout, suppression, types
}

// Utilisation
const MyForm: React.FC = () => {
  const { values, handleChange, handleSubmit, errors } = useForm({
    name: '',
    email: ''
  });
  
  const { isOpen, open, close } = useModal();
  const { addNotification } = useNotifications();
  
  // Implémentez le formulaire
};
```

---

## 🏆 Défi bonus : Application complète

Créez une application de gestion de tâches complète avec TypeScript :

```typescript
// Architecture complète
interface TodoApp {
  // Structure de l'application
}

// Composants principaux
const TodoApp: React.FC = () => {
  // Implémentez l'application complète
  // - Gestion d'état globale
  // - Composants typés
  // - Gestion des erreurs
  // - Persistance des données
  // - Tests unitaires
};

// Fonctionnalités à implémenter
// - CRUD des tâches
// - Filtrage et tri
// - Recherche
// - Catégories
// - Notifications
// - Thème sombre/clair
// - Export/Import
```

---

## 📊 Auto-évaluation

Après avoir terminé tous les exercices, évaluez votre compréhension :

- [ ] Je maîtrise les composants React avec TypeScript
- [ ] Je comprends les props et interfaces typées
- [ ] Je sais utiliser les hooks avec des types appropriés
- [ ] Je maîtrise la gestion d'état avec TypeScript
- [ ] Je comprends les patterns avancés (HOC, Render Props)
- [ ] Je sais intégrer des librairies tierces avec TypeScript
- [ ] Je peux créer des applications React TypeScript complètes
- [ ] Je comprends les bonnes pratiques de typage React

**Score :** \_\_\_/20 exercices résolus

Si vous avez moins de 16/20, relisez le cours et refaites les exercices difficiles.

**Prêt pour les solutions ?** Consultez `solutions.md` ! 🔍
