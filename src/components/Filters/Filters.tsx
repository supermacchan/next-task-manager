"use client";

import { useState } from "react";
import { Listbox } from "@headlessui/react";

import filters from "@/data/filters.json"
import { FilterType } from "@/types";

export const Filters: React.FC = () => {
  const [selected, setSelected] = useState<FilterType>(filters[0]);

  return (
    <Listbox value={selected} onChange={setSelected}>
      <Listbox.Button>{selected.text}</Listbox.Button>
      <Listbox.Options className={"absolute top-0 right-0"}>
        {filters.map((filter: FilterType) => (
          <Listbox.Option
            key={filter.id}
            value={filter}
            disabled={filter.unavailable}
          >
            {filter.text}
          </Listbox.Option>
        ))}
      </Listbox.Options>
    </Listbox>
  );
};
