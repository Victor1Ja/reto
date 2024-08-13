#### Ejercicio de Ejmplo Hexagonal
 ### create_accounts_table.sql

```
CREATE TABLE accounts (
    id SERIAL PRIMARY KEY,
    owner_name VARCHAR(100) NOT NULL,
    balance NUMERIC(15, 2) NOT NULL,
    is_deleted BOOLEAN DEFAULT FALSE
);
```
### Documentación en Markdown

```markdown
# API de Cuentas de Ahorro

Esta API permite realizar operaciones CRUD en cuentas de ahorro.

## Endpoints

### 1. Obtener detalles de una cuenta específica

**GET /api/accounts/:id**

#### Request

```plaintext
GET /api/accounts/1
```

#### Response

```json
{
  "id": 1,
  "ownerName": "Profe LiteThinking",
  "balance": 1000.00
}
```

### 2. Obtener todas las cuentas

**GET /api/accounts**

#### Request

```plaintext
GET /api/accounts
```

#### Response

```json
[
  {
    "id": 1,
    "ownerName": "Profe LiteThinking",
    "balance": 1000.00
  },
  {
    "id": 2,
    "ownerName": "Jane Smith",
    "balance": 1500.50
  }
]
```

### 3. Insertar una nueva cuenta

**POST /api/accounts**

#### Request

```json
{
  "ownerName": "Alice Johnson",
  "balance": 2000.75
}
```

#### Response

```json
{
  "id": 3,
  "ownerName": "Alice Johnson",
  "balance": 2000.75
}
```

### 4. Actualizar una cuenta existente

**PUT /api/accounts/:id**

#### Request

```plaintext
PUT /api/accounts/1
```

```json
{
  "ownerName": "Profe LiteThinking Updated",
  "balance": 1100.00
}
```

#### Response

```plaintext
204 No Content
```

### 5. Borrado lógico de una cuenta

**DELETE /api/accounts/:id**

#### Request

```plaintext
DELETE /api/accounts/1
```

#### Response

```plaintext
204 No Content
```
```

### Ejemplos de Requests en JSON

#### 1. Obtener detalles de una cuenta específica

```plaintext
GET /api/accounts/1
```

```json
// Response
{
  "id": 1,
  "ownerName": "Profe LiteThinking",
  "balance": 1000.00
}
```

#### 2. Obtener todas las cuentas

```plaintext
GET /api/accounts
```

```json
// Response
[
  {
    "id": 1,
    "ownerName": "Profe LiteThinking",
    "balance": 1000.00
  },
  {
    "id": 2,
    "ownerName": "Jane Smith",
    "balance": 1500.50
  }
]
```

#### 3. Insertar una nueva cuenta

```plaintext
POST /api/accounts
```

```json
// Request
{
  "ownerName": "Alice Johnson",
  "balance": 2000.75
}
```

```json
// Response
{
  "id": 3,
  "ownerName": "Alice Johnson",
  "balance": 2000.75
}
```

#### 4. Actualizar una cuenta existente

```plaintext
PUT /api/accounts/1
```

```json
// Request
{
  "ownerName": "Profe LiteThinking Updated",
  "balance": 1100.00
}
```

```plaintext
// Response
204 No Content
```

#### 5. Borrado lógico de una cuenta

```plaintext
DELETE /api/accounts/1
```

```plaintext
// Response
204 No Content
```

### Resumen

Esta documentación y los ejemplos de requests en JSON te permitirán probar la API de cuentas de ahorro utilizando Postman. Cada endpoint está detallado con su método HTTP, ejemplo de request y ejemplo de response, donde aplica. ¡Espero que esto te sea útil para tus pruebas! 🚀