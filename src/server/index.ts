import { app } from './app';

const DEFAULT_PORT = 3000;

app.listen(DEFAULT_PORT, () => {
    console.log(`Server is listening on port ${DEFAULT_PORT}`)
});