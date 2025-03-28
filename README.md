
<div align="center">

# MIT-GH2025-MedEx  
Automating negotiation with Insurance Company

[![Last Commit](https://img.shields.io/badge/last%20commit-March-blue.svg)](https://github.com/Yannaner/MIT-GH2025/commits)
[![ObjectScript 61.7%](https://img.shields.io/badge/ObjectScript-61.7%25-orange.svg)](https://github.com/Yannaner/MIT-GH2025/search?l=objectscript)
[![Languages 6](https://img.shields.io/badge/Languages-6-brightgreen.svg)](https://github.com/Yannaner/MIT-GH2025)

Built with the tools and technologies:

[![JSON](https://img.shields.io/badge/JSON-000000?logo=json&logoColor=white)](https://www.json.org/)
[![npm](https://img.shields.io/badge/npm-CB3837?logo=npm&logoColor=white)](https://www.npmjs.com/)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![React](https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=black)](https://reactjs.org/)
[![Docker](https://img.shields.io/badge/Docker-2496ED?logo=docker&logoColor=white)](https://www.docker.com/)
[![XML](https://img.shields.io/badge/XML-8B0000?logo=xml&logoColor=white)](https://www.w3.org/XML/)
[![IRIS](https://img.shields.io/badge/IRIS-FF0080?logo=InterSystems&logoColor=white)](https://www.intersystems.com/products/intersystems-iris/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![GitHub Actions](https://img.shields.io/badge/GitHub%20Actions-2088FF?logo=github-actions&logoColor=white)](https://github.com/features/actions)
[![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![ESLint](https://img.shields.io/badge/ESLint-4B32C3?logo=eslint&logoColor=white)](https://eslint.org/)
[![CSS](https://img.shields.io/badge/CSS-1572B6?logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![YAML](https://img.shields.io/badge/YAML-808080?logo=yaml&logoColor=white)](https://yaml.org/)

</div>

---

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
  - [Using ZPM](#using-zpm)
  - [For Development](#for-development)
- [Usage](#usage)
- [API Documentation](#api-documentation)
- [Development](#development)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)
- [Acknowledgements](#acknowledgements)

---

## Overview
**MIT-GH2025** is a robust REST API application built with ObjectScript on InterSystems IRIS. Designed to handle seamless data search and management operations, this template leverages modern tools (Docker, VSCode, GitHub Actions, etc.) to simplify both development and deployment.

---

## Features
- **CRUD Operations**: Prebuilt Create, Read, Update, and Delete endpoints.
- **OpenAPI (Swagger) Docs**: Interactive documentation for streamlined testing.
- **Containerization**: Easy setup via Docker Compose.
- **VSCode Integration**: Quick ObjectScript development and debugging.
- **ZPM Compatibility**: Straightforward installation into IRIS environments.

---

## Prerequisites
- [Git](https://git-scm.com/)
- [Docker Desktop](https://www.docker.com/)
- [Visual Studio Code](https://code.visualstudio.com/) with [ObjectScript Extension](https://marketplace.visualstudio.com/items?itemName=IRIS-Community.iris-objectscript)

---

## Installation

### Using ZPM
Install the REST API module in your IRIS environment:
```objectscript
zpm:USER>install rest-api-template
```

### For Development
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/Yannaner/MIT-GH2025.git
   ```

2. **Run with Docker**:
   ```bash
   docker-compose up -d --build
   ```

3. **Access Swagger**:
   - Navigate to: [http://localhost:52773/swagger-ui/index.html](http://localhost:52773/swagger-ui/index.html)

---

## Usage
Once your container is running, you can interact with the REST endpoints:

- **GET** all records:
  ```
  GET http://localhost:52773/crud/persons/all
  ```
- **GET** a record by ID:
  ```
  GET http://localhost:52773/crud/persons/{id}
  ```
- **POST** to create a new record:
  ```
  POST http://localhost:52773/crud/persons/
  ```
- **PUT** to update an existing record:
  ```
  PUT http://localhost:52773/crud/persons/{id}
  ```
- **DELETE** a record by ID:
  ```
  DELETE http://localhost:52773/crud/persons/{id}
  ```

To generate sample data, open the IRIS terminal or web terminal at `http://localhost:52773/terminal/` and run:
```objectscript
do ##class(dc.Sample.Person).AddTestData(10)
```

---

## API Documentation
OpenAPI (Swagger) docs can be accessed at:
```
http://localhost:52773/crud/_spec
```

---

## Development
1. Open the project in VSCode.
2. Confirm the **ObjectScript** extension is installed.
3. Edit classes in `src/cls/` — your changes will be compiled automatically in the running container.

---

## Project Structure
```
MIT-GH2025/
├── .github/           # GitHub workflows
├── .vscode/           # VSCode settings and launch config
├── frontend/          # Optional frontend assets
├── src/
│   └── dc/Sample/     # Sample ObjectScript classes
├── Dockerfile         # IRIS Docker build file
├── docker-compose.yml # Docker Compose configuration
├── README.md          # This README
└── LICENSE            # MIT License
```

---

## Contributing
1. Fork the repo.
2. Create a new branch for your feature or fix.
3. Ensure code meets project standards.
4. Open a pull request with details of your changes.

---

## License
This project is licensed under the [MIT License](LICENSE).

---

## Acknowledgements
- [intersystems-community/iris-rest-api-template](https://github.com/intersystems-community/iris-rest-api-template)
- The InterSystems IRIS community for guidance and support.

