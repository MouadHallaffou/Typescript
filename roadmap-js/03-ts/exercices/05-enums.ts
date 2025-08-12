// ===============================
// Exercice 5: Enums et const assertions
// ===============================

console.log("🎨 Exercice 5: Enums et const assertions TypeScript");
console.log("==================================================");

// TODO: Définissez un enum pour les couleurs
enum Color {
  RED = "red",
  GREEN = "green",
  BLUE = "blue",
  YELLOW = "yellow",
  PURPLE = "purple",
  ORANGE = "orange",
  BLACK = "black",
  WHITE = "white"
}

// TODO: Créez un enum numérique pour les priorités
enum Priority {
  LOW = 1,
  MEDIUM = 2,
  HIGH = 3,
  URGENT = 4
}

// TODO: Créez un enum string pour les statuts
enum OrderStatus {
  PENDING = "pending",
  PROCESSING = "processing",
  SHIPPED = "shipped",
  DELIVERED = "delivered",
  CANCELLED = "cancelled"
}

// Interface pour un produit
interface Product {
  id: number;
  name: string;
  color: Color;
  price: number;
  priority: Priority;
  status: OrderStatus;
}

// TODO: Implémentez la fonction filterProductsByColor
function filterProductsByColor(products: Product[], color: Color): Product[] {
  return products.filter(product => product.color === color);
}

// TODO: Implémentez une fonction pour obtenir les produits par priorité
function getProductsByPriority(products: Product[], priority: Priority): Product[] {
  return products.filter(product => product.priority === priority);
}

// TODO: Implémentez une fonction pour obtenir les produits par statut
function getProductsByStatus(products: Product[], status: OrderStatus): Product[] {
  return products.filter(product => product.status === status);
}

// Tests
console.log("🎨 Tests des couleurs:");
const products: Product[] = [
  { 
    id: 1, 
    name: "T-shirt", 
    color: Color.RED, 
    price: 25, 
    priority: Priority.MEDIUM,
    status: OrderStatus.PENDING
  },
  { 
    id: 2, 
    name: "Pantalon", 
    color: Color.BLUE, 
    price: 50, 
    priority: Priority.HIGH,
    status: OrderStatus.PROCESSING
  },
  { 
    id: 3, 
    name: "Chaussures", 
    color: Color.RED, 
    price: 80, 
    priority: Priority.LOW,
    status: OrderStatus.SHIPPED
  },
  { 
    id: 4, 
    name: "Casquette", 
    color: Color.BLACK, 
    price: 15, 
    priority: Priority.URGENT,
    status: OrderStatus.DELIVERED
  }
];

const redProducts = filterProductsByColor(products, Color.RED);
console.log("🔴 Produits rouges:", redProducts.map(p => p.name));

const highPriorityProducts = getProductsByPriority(products, Priority.HIGH);
console.log("⚡ Produits haute priorité:", highPriorityProducts.map(p => p.name));

const shippedProducts = getProductsByStatus(products, OrderStatus.SHIPPED);
console.log("🚚 Produits expédiés:", shippedProducts.map(p => p.name));

// TODO: Créez un enum pour les types de notification
enum NotificationType {
  INFO = "info",
  SUCCESS = "success",
  WARNING = "warning",
  ERROR = "error"
}

// TODO: Créez un enum pour les canaux de notification
enum NotificationChannel {
  EMAIL = "email",
  SMS = "sms",
  PUSH = "push",
  IN_APP = "in_app"
}

interface Notification {
  id: string;
  type: NotificationType;
  channel: NotificationChannel;
  message: string;
  timestamp: Date;
  read: boolean;
}

// TODO: Implémentez des fonctions pour gérer les notifications
function createNotification(
  type: NotificationType,
  channel: NotificationChannel,
  message: string
): Notification {
  return {
    id: Math.random().toString(36).substr(2, 9),
    type,
    channel,
    message,
    timestamp: new Date(),
    read: false
  };
}

function filterNotificationsByType(
  notifications: Notification[],
  type: NotificationType
): Notification[] {
  return notifications.filter(notification => notification.type === type);
}

function markAsRead(notifications: Notification[], id: string): Notification[] {
  return notifications.map(notification =>
    notification.id === id
      ? { ...notification, read: true }
      : notification
  );
}

// Tests des notifications
console.log("\n🔔 Tests des notifications:");
const notifications: Notification[] = [
  createNotification(NotificationType.SUCCESS, NotificationChannel.EMAIL, "Commande confirmée"),
  createNotification(NotificationType.WARNING, NotificationChannel.PUSH, "Stock faible"),
  createNotification(NotificationType.ERROR, NotificationChannel.SMS, "Paiement échoué"),
  createNotification(NotificationType.INFO, NotificationChannel.IN_APP, "Nouvelle fonctionnalité disponible")
];

console.log("📧 Notifications par email:", 
  notifications.filter(n => n.channel === NotificationChannel.EMAIL).length
);

console.log("⚠️ Notifications d'avertissement:", 
  filterNotificationsByType(notifications, NotificationType.WARNING).length
);

// TODO: Utilisez const assertions avec des objets
const APP_CONFIG = {
  name: "MyApp",
  version: "1.0.0",
  environment: "production",
  features: {
    darkMode: true,
    notifications: true,
    analytics: false
  }
} as const;

// TODO: Créez des types basés sur les const assertions
type AppConfig = typeof APP_CONFIG;
type AppFeatures = typeof APP_CONFIG.features;

// TODO: Implémentez une fonction qui utilise les const assertions
function isFeatureEnabled(feature: keyof AppFeatures): boolean {
  return APP_CONFIG.features[feature];
}

// Tests des const assertions
console.log("\n⚙️ Tests des const assertions:");
console.log("🌙 Dark mode enabled:", isFeatureEnabled("darkMode"));
console.log("🔔 Notifications enabled:", isFeatureEnabled("notifications"));
console.log("📊 Analytics enabled:", isFeatureEnabled("analytics"));

// TODO: Créez un enum pour les directions
enum Direction {
  NORTH = "north",
  SOUTH = "south",
  EAST = "east",
  WEST = "west"
}

// TODO: Créez un enum pour les actions de jeu
enum GameAction {
  MOVE = "move",
  ATTACK = "attack",
  DEFEND = "defend",
  USE_ITEM = "use_item",
  REST = "rest"
}

interface GameState {
  playerPosition: [number, number];
  playerHealth: number;
  playerDirection: Direction;
  lastAction: GameAction;
}

// TODO: Implémentez des fonctions pour le jeu
function movePlayer(
  state: GameState,
  direction: Direction,
  distance: number
): GameState {
  const [x, y] = state.playerPosition;
  let newX = x;
  let newY = y;

  switch (direction) {
    case Direction.NORTH:
      newY -= distance;
      break;
    case Direction.SOUTH:
      newY += distance;
      break;
    case Direction.EAST:
      newX += distance;
      break;
    case Direction.WEST:
      newX -= distance;
      break;
  }

  return {
    ...state,
    playerPosition: [newX, newY],
    playerDirection: direction,
    lastAction: GameAction.MOVE
  };
}

function performAction(
  state: GameState,
  action: GameAction
): GameState {
  let newHealth = state.playerHealth;

  switch (action) {
    case GameAction.ATTACK:
      newHealth = Math.max(0, newHealth - 10);
      break;
    case GameAction.DEFEND:
      newHealth = Math.min(100, newHealth + 5);
      break;
    case GameAction.REST:
      newHealth = Math.min(100, newHealth + 20);
      break;
  }

  return {
    ...state,
    playerHealth: newHealth,
    lastAction: action
  };
}

// Tests du jeu
console.log("\n🎮 Tests du jeu:");
let gameState: GameState = {
  playerPosition: [0, 0],
  playerHealth: 100,
  playerDirection: Direction.NORTH,
  lastAction: GameAction.REST
};

console.log("🎯 État initial:", gameState);

gameState = movePlayer(gameState, Direction.EAST, 5);
console.log("➡️ Après mouvement est:", gameState);

gameState = performAction(gameState, GameAction.ATTACK);
console.log("⚔️ Après attaque:", gameState);

gameState = performAction(gameState, GameAction.REST);
console.log("😴 Après repos:", gameState);

// TODO: Créez un enum pour les types de données
enum DataType {
  STRING = "string",
  NUMBER = "number",
  BOOLEAN = "boolean",
  OBJECT = "object",
  ARRAY = "array",
  NULL = "null",
  UNDEFINED = "undefined"
}

// TODO: Implémentez une fonction pour détecter le type de données
function getDataType(value: any): DataType {
  if (value === null) return DataType.NULL;
  if (value === undefined) return DataType.UNDEFINED;
  if (Array.isArray(value)) return DataType.ARRAY;
  if (typeof value === "object") return DataType.OBJECT;
  return DataType[typeof value.toUpperCase() as keyof typeof DataType];
}

// Tests de détection de type
console.log("\n🔍 Tests de détection de type:");
console.log("📝 String type:", getDataType("hello"));
console.log("🔢 Number type:", getDataType(42));
console.log("✅ Boolean type:", getDataType(true));
console.log("📦 Array type:", getDataType([1, 2, 3]));
console.log("🏗️ Object type:", getDataType({ name: "test" }));
console.log("🚫 Null type:", getDataType(null));
console.log("❓ Undefined type:", getDataType(undefined));

console.log("\n✅ Exercice 5 terminé !");
console.log("📝 Points clés appris :");
console.log("• Définition et utilisation d'enums");
console.log("• Enums numériques et string");
console.log("• Const assertions avec as const");
console.log("• Types basés sur const assertions");
console.log("• Utilisation d'enums dans les interfaces");
console.log("• Gestion d'état avec enums");
