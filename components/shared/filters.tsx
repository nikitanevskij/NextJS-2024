import React from "react";
import { Title } from "./title";
import { FilterCheckbox } from "./filter-checkbox";
import { Input, RangeSlider } from "../ui";
import { CheckboxFiltersGroup } from "./checkbox-filters-group";

interface Props {
  className?: string;
}

export const Filters: React.FC<Props> = ({ className }) => {
  return (
    <div className={className}>
      <Title text="Фильтрация" size="sm" className="mb-5 font-bold" />

      {/* Верхние чекбоксы */}
      <div className="flex flex-col gap-4">
        <FilterCheckbox text="Можно собирать" value="1" />
        <FilterCheckbox text="Новинки" value="2" />
      </div>
      {/* Фильтр цен */}
      <div className="mt-5 border-y-neutral-100 py-6 pb-7">
        <p className="font-bold mb-3">Цена от и до:</p>
        <div className="flex gap-3 mb-5">
          <Input type="number" placeholder="0" min={0} max={1000} defaultValue={0} />
          <Input type="number" min={100} max={1000} placeholder="1000" />
        </div>

        <RangeSlider min={0} max={1000} step={10} value={[0, 1000]} />
      </div>
      <CheckboxFiltersGroup
        title="Ингридиенты"
        className="mt-5"
        limit={6}
        defaultItems={[
          { text: "Сырный соус", value: "1" },
          { text: "Пеперони", value: "2" },
          { text: "Острые", value: "3" },
          { text: "Сладкие", value: "4" },
          { text: "Соленые", value: "5" },
          { text: "Кислые", value: "6" },
          { text: "Дикие", value: "7" },
          { text: "Горячие", value: "8" },
          { text: "Старые", value: "9" },
          { text: "Новые", value: "99" },
          { text: "Прошлогодние", value: "77" },
        ]}
        items={[
          { text: "Сырный соус", value: "1" },
          { text: "Пеперони", value: "2" },
          { text: "Острые", value: "3" },
          { text: "Сладкие", value: "4" },
          { text: "Соленые", value: "5" },
          { text: "Кислые", value: "6" },
          { text: "Дикие", value: "7" },
          { text: "Горячие", value: "8" },
          { text: "Старые", value: "9" },
          { text: "Новые", value: "99" },
          { text: "Прошлогодние", value: "77" },
        ]}
      />
    </div>
  );
};
