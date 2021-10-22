import { CategoriasStyled } from "@styles/components/CategoriasStyled";

import Categoria from "./categoria";
import categories from "@utils/gluetexts/categories-keys";

const Categorias: React.FC = () => {
    return (
        <CategoriasStyled>
            {categories.map((category) => (
                <Categoria key={category.categoryName} {...category} />
            ))}
        </CategoriasStyled>
    );
};

export default Categorias;
