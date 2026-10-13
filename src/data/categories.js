export const categories = [

            // ============================================================
            // AI ROLES & CAPABILITY LEVELS
            // ============================================================
            {
                id: 'ai-roles',
                name: 'AI Roles & Capability Levels',
                icon: 'fa-solid fa-user-gear',
                color: 'from-indigo-500 to-violet-600',

                items: [

                    {
                        title: 'AI User',

                        desc: 'Uses AI to complete tasks.',

                        corePurpose: 'Uses AI to complete tasks.',

                        typicalQuestion: 'How can AI help me with this task?',

                        isInteractiveModal: true,
                        isAIRole: true,
                        modalType: 'activities',
                        modalTitle: 'Typical Activities',

                        activities: [
                            'Uses existing AI tools to accomplish individual tasks',
                            'Asks questions and gets explanations',
                            'Generates or edits content',
                            'Summarizes documents',
                            'Researches topics',
                            'Brainstorms ideas',
                            'Translates or rewrites content',
                            'Uses AI for learning',
                            'Creates presentations and drafts',
                            'Performs simple productivity tasks'
                        ]
                    },

                    {
                        title: 'AI Practitioner',

                        desc: 'Works with AI to transform their work.',

                        corePurpose: 'Works with AI to transform their work.',

                        typicalQuestion: 'How can I use AI to do my work better?',

                        isInteractiveModal: true,
                        isAIRole: true,
                        modalType: 'activities',
                        modalTitle: 'Typical Activities',

                        activities: [
                            'Uses AI extensively and systematically to transform how they perform their profession',
                            'Integrates AI into day-to-day professional work',
                            'Uses AI for analysis and decision support',
                            'Uses AI for design, problem-solving and research',
                            'Uses AI-assisted programming and development',
                            'Uses AI to create workflows and automate tasks',
                            'Uses AI agents and coding agents as work partners',
                            'Redesigns existing processes around AI',
                            'Combines AI capabilities with domain expertise',
                            'Validates, refines and applies AI outputs'
                        ]
                    },

                    {
                        title: 'AI Developer',

                        desc: 'Builds with AI to build solutions.',

                        corePurpose: 'Builds with AI to build solutions.',

                        typicalQuestion: 'How can I build a solution using AI?',

                        isInteractiveModal: true,
                        isAIRole: true,
                        modalType: 'activities',
                        modalTitle: 'Typical Activities',

                        activities: [
                            'Uses existing AI technologies to build applications and solutions',
                            'Builds AI-powered applications and products',
                            'Connects applications to LLMs and AI APIs',
                            'Builds RAG systems',
                            'Creates AI agents and agentic workflows',
                            'Integrates AI into websites, applications and enterprise systems',
                            'Builds AI-powered automation',
                            'Fine-tunes and deploys models',
                            'Designs AI application architecture',
                            'Evaluates AI application performance'
                        ]
                    },

                    {
                        title: 'AI Creator',

                        desc: 'Builds AI and creates AI technology itself.',

                        corePurpose: 'Builds AI and creates AI technology itself.',

                        typicalQuestion: 'How can we create or improve AI itself?',

                        isInteractiveModal: true,
                        isAIRole: true,
                        modalType: 'activities',
                        modalTitle: 'Typical Activities',

                        activities: [
                            'Creates or advances underlying AI technology',
                            'Designs new ML/AI models and algorithms',
                            'Develops model architectures',
                            'Develops neural-network techniques',
                            'Trains foundation models',
                            'Develops new training methodologies',
                            'Conducts AI research',
                            'Develops new learning techniques',
                            'Improves model capabilities and performance',
                            'Optimizes model training and inference',
                            'Develops underlying AI technologies'
                        ]
                    }

                ]
            },

            // ============================================================
            // PYTHON & DEVELOPMENT
            // ============================================================
            {
                id: 'python',
                name: 'Python & Development',
                icon: 'fa-brands fa-python',
                color: 'from-amber-500 to-yellow-600',

                items: [

                    {
                        title: 'Why Python',
                        desc: 'Readability, massive ecosystem, dynamic typing, and rapid prototyping capabilities.'
                    },

                    {
                        title: 'Python Basics',

                        desc: 'Click to explore fundamental execution models, dynamic typing, memory management, and core syntax principles.',

                        isInteractiveModal: true,

                        modalTitle: 'Python Core Fundamentals',

                        details: [

                            {
                                level: 'Execution Model & Bytecode Compilation',
                                subtitle: 'Bytecode & PVM Execution',
                                desc: 'Source code is compiled into platform-independent bytecode before running on the Python Virtual Machine (PVM).'
                            },

                            {
                                level: 'Dynamic Typing',
                                subtitle: 'Runtime Type Resolution',
                                desc: 'Variables act as references or labels to objects in memory, and types are resolved and checked at runtime rather than compile-time.'
                            },

                            {
                                level: 'Object-Oriented Core',
                                subtitle: 'First-Class Objects',
                                desc: 'Everything in Pythonâ€”including numbers, strings, functions, and modulesâ€”is a first-class object with an identity, type, and value.'
                            },

                            {
                                level: 'Whitespace & Indentation',
                                subtitle: 'Strict Syntax Formatting',
                                desc: 'Code blocks and logical scopes are defined strictly by indentation rather than curly braces or semicolons.'
                            },

                            {
                                level: 'Automatic Memory Management',
                                subtitle: 'Reference Counting & Garbage Collection',
                                desc: 'Memory allocation and deallocation are handled automatically via reference counting and a cyclic garbage collector.'
                            },

                            {
                                level: 'Control Flow & Iteration',
                                subtitle: 'Branching and Loops',
                                desc: 'Logical branching (if, elif, else), conditional repetition (while), and collection traversal (for loops) dictate execution paths.'
                            },

                            {
                                level: 'Functions & Modularity',
                                subtitle: 'Scope and Reusability',
                                desc: 'Reusable blocks of code defined with def that manage scope and support parameter passing, alongside module imports from the standard library.'
                            },

                            {
                                level: 'Error & Exception Handling',
                                subtitle: 'Fault Tolerance',
                                desc: 'Runtime issues are managed structurally using try, except, else, and finally blocks to prevent unexpected program termination.'
                            }

                        ]
                    },

                    {
                        title: 'Levels of System isolation',

                        desc: 'Click to explore granular layers of isolation ranging from project-level packages to hardware virtual machines and virtual networks.',

                        isInteractiveModal: true,

                        modalTitle: 'Levels of System Isolation',

                        details: [

                            {
                                level: 'Project-Level (Dependencies & Packages)',
                                subtitle: 'Project-level package/dependency isolation (venv)',
                                desc: 'Shares same Python Version, but different site-packages linked to the projects. Each project can have its own venv.'
                            },

                            {
                                level: 'Language/Runtime-Level (Interpreters & Compilers)',
                                subtitle: 'Language/Runtime-level isolation (pyenv)',
                                desc: 'Multiple independent runtime versions managed on the same system (multiple python versions).'
                            },

                            {
                                level: 'User-Space (Filesystems, Processes, Networks, Users via Containers)',
                                subtitle: 'User-Space Virtualization (Containers like Docker)',
                                desc: 'Shared OS kernel, but completely isolated user spaces. Different File Systems (Root FS), Process Space (PID), Network Stack (IP Address, Ports - two containers can run a webserver on port 80 without conflicting). Users and Permissions (Each Container has its own root folder).'
                            },

                            {
                                level: 'Hardware-Level (Virtual CPUs, RAM, and Kernels via VMs)',
                                subtitle: 'Hardware-Level Isolation (Virtual Machines)',
                                desc: 'Shared physical hardware (CPU, RAM, motherboard), but completely virtualized hardware slices (CPU, RAM, storage, and network interfaces) and independent OS kernels managed by a hypervisor. Each VM gets its own dedicated slice of virtual hardware along with OS Kernel.'
                            },

                            {
                                level: 'Network-Level (IP Spaces, Routing, and Firewalls via VPCs)',
                                subtitle: 'Virtual Networks (Network Micro-Segmentation & VPCs)',
                                desc: 'Shares same physical network interface cards (NICs), physical switches, physical routers, and physical copper/fiber cables. Separates Network Topology & IP Spaces (VPC/VLAN: 10.0.0.0/16), Routing and Firewalls (Firewall policies), Traffic Segregation (Packets from one virtual network cannot see or enter another).'
                            }

                        ]
                    },

                    {
                        title: 'requirements.txt',
                        desc: 'Flat text file declaring pinned package versions (package==version) for reproducible builds.'
                    }

                ]
            },

            // ============================================================
            // API MANAGEMENT
            // ============================================================
            {
                id: 'api',
                name: 'API Management',
                icon: 'fa-solid fa-network-wired',
                color: 'from-blue-500 to-indigo-600',

                items: [

                    {
                        title: 'API Types',
                        desc: 'Grep API (pattern searching), WebHook API (event-driven HTTP push), WebStreaming API (real-time persistent feeds), SOAP API (XML contracts/WSDL), REST API (stateless JSON over HTTP).'
                    },

                    {
                        title: 'Protocols',
                        desc: 'FTP (file transfer), SMTP (email routing), HTTP/HTTPS (stateless web and API communication foundation).'
                    },

                    {
                        title: 'API vs UI vs Web Scraping',
                        desc: 'API (programmatic machine contract), UI (visual human interface), Web Scraping (automated DOM/HTML extraction).'
                    },

                    {
                        title: 'Request Types',
                        desc: 'Methods (GET, POST, PUT, PATCH, DELETE), headers, query parameters, and body payloads.'
                    },

                    {
                        title: 'Response Types',
                        desc: 'Status codes (200, 201, 400, 401, 404, 500) and payloads (JSON, XML, binary streams).'
                    }

                ]
            },

            // ============================================================
            // ARCHITECTURES & FRAMEWORKS
            // ============================================================
            {
                id: 'architecture',
                name: 'Architectures & Frameworks',
                icon: 'fa-solid fa-cubes',
                color: 'from-emerald-500 to-teal-600',

                items: [

                    {
                        title: 'LAB Architecture',
                        desc: 'Multi-agent sandboxed research system collaborating across idea, plan, code, and validation layers.'
                    },

                    {
                        title: 'MaaS Architecture',
                        desc: 'Model as a Service (serverless API endpoints) & Multi-agent Architecture Search (automated supernet routing).'
                    },

                    {
                        title: 'LangChain',
                        desc: 'Modular orchestration framework connecting models, prompts, memory, and tools.'
                    },

                    {
                        title: 'RAG',
                        desc: 'Retrieval-Augmented Generation architectural pattern combining external data search with LLM generation.'
                    },

                    {
                        title: 'Transformer / Attention',
                        desc: 'Neural network architecture processing sequence tokens in parallel via self-attention mechanisms.'
                    },

                    {
                        title: 'Multihead Attention',
                        desc: 'Simultaneous sub-space attention projections allowing models to capture diverse contextual relationships.'
                    }

                ]
            },

            // ============================================================
            // CORE LLM CONCEPTS
            // ============================================================
            {
                id: 'llm',
                name: 'Core LLM Concepts',
                icon: 'fa-solid fa-brain',
                color: 'from-purple-500 to-pink-600',

                items: [

                    {
                        title: 'Tokenization & Tokens',
                        desc: 'Sub-word text units converted into integer IDs by tokenizers (e.g., Byte-Pair Encoding).'
                    },

                    {
                        title: 'How LLMs Create Embeddings',
                        desc: 'Mapping tokens through multi-layer deep weight matrices into dense numerical vector representations.'
                    },

                    {
                        title: 'Context Window',
                        desc: 'Maximum token threshold (input prompt + output generation) processed in a single inference session.'
                    },

                    {
                        title: 'Vectors vs Embeddings',
                        desc: 'Vectors are general coordinate arrays; embeddings specialize in semantic representation of real-world concepts.'
                    },

                    {
                        title: 'Tensors',
                        desc: 'Multi-dimensional mathematical arrays generalizing scalars, vectors, and matrices.'
                    },

                    {
                        title: 'VectorDB',
                        desc: 'Specialized database optimized for high-dimensional approximate nearest neighbor (ANN) retrieval.'
                    },

                    {
                        title: 'Hallucination',
                        desc: 'Model generation of inaccurate, fabricated, or nonsensical outputs delivered with high confidence.'
                    }

                ]
            },

            // ============================================================
            // RAG & RETRIEVAL
            // ============================================================
            {
                id: 'rag',
                name: 'RAG & Retrieval Strategies',
                icon: 'fa-solid fa-magnifying-glass-chart',
                color: 'from-orange-500 to-amber-600',

                items: [

                    {
                        title: 'RAG Chain',
                        desc: 'Query -> Retriever -> Context Augmentation -> LLM generation pipeline sequence.'
                    },

                    {
                        title: 'Cosine Similarity',
                        desc: 'Mathematical angle calculation measuring vector directional proximity in multi-dimensional spaces.'
                    },

                    {
                        title: 'Chunking Strategy',
                        desc: 'Document segmentation tactics (fixed, recursive, semantic) to prepare source text for embedding.'
                    },

                    {
                        title: 'MMR (Maximal Marginal Relevance)',
                        desc: 'Retrieval algorithm balancing high query relevance with result diversity to eliminate redundancy.'
                    }

                ]
            },

            // ============================================================
            // AI AGENTS & INTERACTION
            // ============================================================
            {
                id: 'agents',
                name: 'AI Agents & Interaction',
                icon: 'fa-solid fa-robot',
                color: 'from-rose-500 to-red-600',

                items: [

                    {
                        title: 'Runnable',
                        desc: 'Standardized framework interface abstraction supporting invoke, stream, and batch executions.'
                    },

                    {
                        title: 'Creating Chatbots',
                        desc: 'Managing multi-turn conversation loops, chat memory persistence, and dynamic prompt templates.'
                    },

                    {
                        title: 'Prompt Engineering & Grounding',
                        desc: 'Structuring instructions and tethering model generations strictly to verified reference documents.'
                    },

                    {
                        title: 'Guardrails',
                        desc: 'Safety wrappers for input/output validation, PII masking, and jailbreak prevention.'
                    },

                    {
                        title: 'Advanced Agent Patterns (Uber)',
                        desc: 'Financial Slack SQL agent, Finch multi-agent supervisor pattern, and Enhanced Agentic RAG.'
                    },

                    {
                        title: 'HITL (Human-In-The-Loop)',
                        desc: 'Mandatory human confirmation gates before executing high-stakes or write operations.'
                    }

                ]
            },

            // ============================================================
            // MISCELLANEOUS / TOOLS
            // ============================================================
            {
                id: 'tools',
                name: 'Miscellaneous / Tools',
                icon: 'fa-solid fa-toolbox',
                color: 'from-cyan-500 to-blue-600',

                items: [

                    {
                        title: 'Shared Folder',
                        desc: 'Network-mounted or local directory shared across multiple compute nodes or containers.'
                    },

                    {
                        title: 'Model vs Modal',
                        desc: 'Model refers to a trained neural network artifact; Modal is a serverless execution platform or UI popup window.'
                    },

                    {
                        title: '.md (Markdown)',
                        desc: 'Lightweight plain-text markup language for documentation, READMEs, and prompt templates.'
                    },

                    {
                        title: 'Harness',
                        desc: 'Execution harness providing sandboxed infrastructure and evaluation tooling to test and benchmark workflows.'
                    }

                ]
            }

        ];
