import nextCoreWebVitals from "eslint-config-next/core-web-vitals";
import eslintConfigPrettier from "eslint-config-prettier";
import tailwind from "eslint-plugin-tailwindcss";

const eslintConfig = [
    ...nextCoreWebVitals,
    ...tailwind.configs["flat/recommended"],
    {
        rules: {
            "@typescript-eslint/no-explicit-any": "off",
            "import/order": [
                "error",
                {
                    alphabetize: { order: "asc", caseInsensitive: true },
                    "newlines-between": "always",
                    groups: [
                        "builtin",
                        "external",
                        "index",
                        "parent",
                        "internal",
                        "sibling",
                    ],
                },
            ],
            "react/function-component-definition": [
                "warn",
                { namedComponents: "arrow-function" },
            ],
            "react/jsx-sort-props": [
                "error",
                {
                    ignoreCase: true,
                    reservedFirst: true,
                    callbacksLast: true,
                    shorthandFirst: true,
                },
            ],
            "tailwindcss/no-custom-classname": [
                "warn",
                { whitelist: ["bx", "bx.*"] },
            ],
            "react-hooks/exhaustive-deps": "warn",
            // Next.js / hydration patterns often use setState once on mount; plugin is overly strict.
            "react-hooks/set-state-in-effect": "off",
        },
    },
    {
        rules: {
            ...eslintConfigPrettier.rules,
        },
    },
];

export default eslintConfig;
