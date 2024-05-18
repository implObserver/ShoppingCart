import { examples } from '@/shared/lib/emulationResponse';

export const getProducts = () => {
    return Object.values(examples);
}