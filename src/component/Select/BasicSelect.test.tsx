import {
  act,
  render,
  screen,
  fireEvent,
  waitFor,
  within,
} from "@testing-library/react";
import { vi, expect } from "vitest";
import "@testing-library/jest-dom";
import { BasicSelect, Props } from "./BasicSelect";
import { hyphenate } from "@/util/util";

const selectOptions: Props["selectOptions"] = [
  { label: "Steve", value: "1", key: "select-steve" },
  { label: "Sue", value: "2", key: "select-sue" },
];
const handleSelect = vi.fn();
const value = selectOptions[0].value;
const label = "My Select box";
const id = hyphenate(label);

describe("BasicSelect", () => {
  it("should render Label", async () => {
    const {rerender} = render(
      <BasicSelect
        id={id}
        selectOptions={selectOptions}
        handleSelect={handleSelect}
        value={value}
        label={label}
      />
    );
    expect(screen.queryAllByText(label).at(0)).toBeInTheDocument();
    expect(
      screen.getByDisplayValue(selectOptions[0].value)
    ).toBeInTheDocument();

    act(() => {
      fireEvent.mouseDown(screen.getByRole("combobox"));
    });
    await waitFor(() => {
      const listbox = screen.getByRole("listbox");
      expect(listbox).toBeInTheDocument();
    });

    act(() => {
      screen.debug();
      fireEvent.click(
        within(screen.getByRole("listbox")).getByText(selectOptions[1].label)
      );
    });

    rerender(<BasicSelect
      id={id}
      selectOptions={selectOptions}
      handleSelect={handleSelect}
      value={selectOptions[1].value}
      label={label}
    />)

    await waitFor(() => {
      expect(
        screen.getByDisplayValue(selectOptions[1].value)
      ).toBeInTheDocument();
    });
  });
});
