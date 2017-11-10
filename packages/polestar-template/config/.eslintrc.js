module.exports = {
  "parser": "babel-eslint",
  "rules": {
    "max-len": [1, 120, 2, {"ignoreComments": true}],
    "indent": [1, 4, { "SwitchCase": 1 }],
    "arrow-body-style": ["error", "as-needed", { "requireReturnForObjectLiteral": true }],
    "react/jsx-indent": [1, 4],
    "linebreak-style": 0,
    "react/jsx-filename-extension": ["error", { extensions: [".js"] }], // airbnb is using .jsx
    "react/prefer-stateless-function": 0,
    "react/prop-types": 0,
    "react/jsx-indent-props": [2, 4],
    "react/forbid-prop-types": 0,
    "jsx-a11y/href-no-hash": 0,
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
