// ===============================
// Exercice 3: Types d'union et littéraux
// ===============================

console.log("🔗 Exercice 3: Types d'union et littéraux TypeScript");
console.log("==================================================");

// TODO: Définissez les types pour un système de commande
type OrderStatus = "pending" | "processing" | "shipped" | "delivered" | "cancelled";

interface Order {
  id: number;
  status: OrderStatus;
  items: string[];
  total: number;
  createdAt: Date;
  updatedAt: Date;
}

// TODO: Implémentez la fonction updateOrderStatus
function updateOrderStatus(order: Order, newStatus: OrderStatus): Order {
  // Validation des transitions de statut
  const validTransitions: Record<OrderStatus, OrderStatus[]> = {
    pending: ["processing", "cancelled"],
    processing: ["shipped", "cancelled"],
    shipped: ["delivered"],
    delivered: [],
    cancelled: []
  };

  const allowedTransitions = validTransitions[order.status];
  if (!allowedTransitions.includes(newStatus)) {
    throw new Error(`Invalid status transition from ${order.status} to ${newStatus}`);
  }

  return {
    ...order,
    status: newStatus,
    updatedAt: new Date()
  };
}

// Tests
console.log("📦 Tests du système de commande:");
const order: Order = {
  id: 1,
  status: "pending",
  items: ["Laptop", "Mouse"],
  total: 1200,
  createdAt: new Date(),
  updatedAt: new Date()
};

console.log("📋 Commande initiale:", order);

try {
  const updatedOrder = updateOrderStatus(order, "processing");
  console.log("✅ Commande mise à jour:", updatedOrder);
  
  const shippedOrder = updateOrderStatus(updatedOrder, "shipped");
  console.log("🚚 Commande expédiée:", shippedOrder);
  
  const deliveredOrder = updateOrderStatus(shippedOrder, "delivered");
  console.log("📦 Commande livrée:", deliveredOrder);
  
} catch (error) {
  console.log("❌ Erreur:", error.message);
}

// TODO: Créez un système de gestion des événements
type EventType = "user_login" | "user_logout" | "purchase" | "refund" | "error";

interface Event {
  id: string;
  type: EventType;
  timestamp: Date;
  userId?: number;
  data: Record<string, any>;
}

// TODO: Implémentez un gestionnaire d'événements typé
class EventHandler {
  private handlers: Map<EventType, ((event: Event) => void)[]> = new Map();

  on(eventType: EventType, handler: (event: Event) => void): void {
    if (!this.handlers.has(eventType)) {
      this.handlers.set(eventType, []);
    }
    this.handlers.get(eventType)!.push(handler);
  }

  emit(event: Event): void {
    const handlers = this.handlers.get(event.type);
    if (handlers) {
      handlers.forEach(handler => handler(event));
    }
  }

  off(eventType: EventType, handler: (event: Event) => void): void {
    const handlers = this.handlers.get(eventType);
    if (handlers) {
      const index = handlers.indexOf(handler);
      if (index > -1) {
        handlers.splice(index, 1);
      }
    }
  }
}

// Tests du gestionnaire d'événements
console.log("\n🎯 Tests du gestionnaire d'événements:");
const eventHandler = new EventHandler();

// Enregistrer des handlers
eventHandler.on("user_login", (event) => {
  console.log("🔐 User logged in:", event.userId);
});

eventHandler.on("purchase", (event) => {
  console.log("💰 Purchase made:", event.data);
});

eventHandler.on("error", (event) => {
  console.log("❌ Error occurred:", event.data);
});

// Émettre des événements
const loginEvent: Event = {
  id: "1",
  type: "user_login",
  timestamp: new Date(),
  userId: 123,
  data: { ip: "192.168.1.1" }
};

const purchaseEvent: Event = {
  id: "2",
  type: "purchase",
  timestamp: new Date(),
  userId: 123,
  data: { amount: 99.99, product: "Premium Plan" }
};

const errorEvent: Event = {
  id: "3",
  type: "error",
  timestamp: new Date(),
  data: { message: "Database connection failed" }
};

eventHandler.emit(loginEvent);
eventHandler.emit(purchaseEvent);
eventHandler.emit(errorEvent);

// TODO: Créez un système de configuration avec des types littéraux
type Environment = "development" | "staging" | "production";
type LogLevel = "debug" | "info" | "warn" | "error";

interface Config {
  environment: Environment;
  logLevel: LogLevel;
  database: {
    host: string;
    port: number;
    name: string;
  };
  api: {
    baseUrl: string;
    timeout: number;
  };
}

// TODO: Implémentez une fonction de validation de configuration
function validateConfig(config: any): config is Config {
  const validEnvironments: Environment[] = ["development", "staging", "production"];
  const validLogLevels: LogLevel[] = ["debug", "info", "warn", "error"];

  return (
    typeof config === "object" &&
    config !== null &&
    validEnvironments.includes(config.environment) &&
    validLogLevels.includes(config.logLevel) &&
    typeof config.database?.host === "string" &&
    typeof config.database?.port === "number" &&
    typeof config.database?.name === "string" &&
    typeof config.api?.baseUrl === "string" &&
    typeof config.api?.timeout === "number"
  );
}

// Tests de configuration
console.log("\n⚙️ Tests de configuration:");
const validConfig: Config = {
  environment: "development",
  logLevel: "debug",
  database: {
    host: "localhost",
    port: 5432,
    name: "myapp_dev"
  },
  api: {
    baseUrl: "http://localhost:3000",
    timeout: 5000
  }
};

const invalidConfig = {
  environment: "invalid",
  logLevel: "debug",
  database: {
    host: "localhost",
    port: "5432", // Should be number
    name: "myapp_dev"
  }
};

console.log("✅ Config valide:", validateConfig(validConfig));
console.log("❌ Config invalide:", validateConfig(invalidConfig));

// TODO: Créez un système de permissions avec des types d'union
type Permission = "read" | "write" | "delete" | "admin";
type Resource = "users" | "posts" | "comments" | "settings";

interface UserRole {
  id: number;
  name: string;
  permissions: Permission[];
  resources: Resource[];
}

// TODO: Implémentez une fonction de vérification de permissions
function hasPermission(
  userRole: UserRole,
  permission: Permission,
  resource: Resource
): boolean {
  return (
    userRole.permissions.includes(permission) &&
    userRole.resources.includes(resource)
  );
}

// Tests de permissions
console.log("\n🔐 Tests de permissions:");
const adminRole: UserRole = {
  id: 1,
  name: "Admin",
  permissions: ["read", "write", "delete", "admin"],
  resources: ["users", "posts", "comments", "settings"]
};

const userRole: UserRole = {
  id: 2,
  name: "User",
  permissions: ["read", "write"],
  resources: ["posts", "comments"]
};

console.log("👑 Admin can delete users:", hasPermission(adminRole, "delete", "users"));
console.log("👤 User can delete users:", hasPermission(userRole, "delete", "users"));
console.log("👤 User can write posts:", hasPermission(userRole, "write", "posts"));

console.log("\n✅ Exercice 3 terminé !");
console.log("📝 Points clés appris :");
console.log("• Types d'union avec des valeurs littérales");
console.log("• Validation des transitions d'état");
console.log("• Gestionnaires d'événements typés");
console.log("• Validation de configuration avec type guards");
console.log("• Systèmes de permissions avec types d'union");
console.log("• Gestion d'erreurs typées");
