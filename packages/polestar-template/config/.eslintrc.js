module.exports = {
  "parser": "babel-eslint",
  "rules": {
    "max-len": [1, 120, 2, {"ignoreComments": true}],
    "indent": [1, 4, { "SwitchCase": 1 }],
    "arrow-body-style": "off", // ["error", "as-needed", { "requireReturnForObjectLiteral": true }],
	  "arrow-parens": "off", // Incompatible with prettier
	  "linebreak-style": 'off', // Don't play nicely with Windows.
	  //"no-useless-constructor": "off",
    //"no-console": "error", // airbnb is using warn
    "no-underscore-dangle": "off",
    "no-param-reassign": ["error", { "props": false }],
    "no-plusplus": "off",
    "import/no-extraneous-dependencies": "off",
    "import/no-unresolved": "off",
    "import/extensions": "off",
    "react/jsx-indent": [1, 4],
    "react/jsx-filename-extension": ["error", { extensions: [".js"] }], // airbnb is using .jsx
    "react/prefer-stateless-function": "off",
    "react/prop-types": "off",
    "react/jsx-indent-props": [2, 4],
    "react/forbid-prop-types": "off",
	  "react/require-default-props": "off", // airbnb use error
    "react/default-props-match-prop-types": "off",
    "jsx-a11y/href-no-hash": "off",
    "jsx-a11y/anchor-is-valid": [ "error", {
      "components": [ "Link" ],
      "specialLink": [ "to" ]
    }]
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
