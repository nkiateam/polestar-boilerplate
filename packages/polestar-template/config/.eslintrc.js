module.exports = {
  "parser": "babel-eslint",
  "rules": {
    "max-len": [1, 120, 2, {"ignoreComments": true}],
    "indent": [1, 4, { "SwitchCase": 1 }],
    "arrow-body-style": ["error", "as-needed", { "requireReturnForObjectLiteral": true }],
    "react/jsx-indent": [1, 4],
    "linebreak-style": 'off', // Don't play nicely with Windows.
    "react/jsx-filename-extension": ["error", { extensions: [".js"] }], // airbnb is using .jsx
    "react/prefer-stateless-function": "off",
    "react/prop-types": "off",
    "react/jsx-indent-props": [2, 4],
    "react/forbid-prop-types": "off",
    "react/default-props-match-prop-types": "off",
    "jsx-a11y/href-no-hash": "off",
    "import/no-extraneous-dependencies": "off",
    "import/no-unresolved": "off",
    "import/extensions": "off"
  },
  "settings" : {
	  "import/resolver": {
		  "webpack": {
			"config": "./webpack.prod.config.js"
	    }
	  }
  },
  "env": {
    "browser": true,
    "node": true
  },
  "extends": ["airbnb"]
}
