import { computed } from "vue";
import type { DButtonProps } from "./index.vue";
import type { ButtonProps } from "ant-design-vue";

export const controller = (props: DButtonProps) => {
  const formattedProps = computed((): ButtonProps => {
    return {
      ...props,
      type: btnTypeMap[props.type],
    };
  });

  const btnClasses = computed(() => {
    return {
      "ant-btn-error": props.type === "error",
    };
  });

  return { formattedProps, btnClasses };
};

type test = DButtonProps["type"];
type test2 = NonNullable<ButtonProps["type"]>;

const btnTypeMap: Record<test, test2> = {
  primary: "primary",
  secondary: "default",
  error: "primary",
  link: "link",
  text: "text",
};
