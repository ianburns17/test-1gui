    CREATE TABLE tasks (
                                       id SERIAL PRIMARY KEY,
                                      title VARCHAR(100) NOT NULL,
                                      description TEXT,
                                      completed BOOLEAN DEFAULT FALSE,
                                     created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
                                      priority INTEGER DEFAULT 0
                 );
