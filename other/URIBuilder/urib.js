const UriBuilder = function(base, additionalParams = {}) {
  this.base = base.split("?")[0];
  this.additionalParams = additionalParams;

  this.constructParams = function() {
    const paramsFromBase = base
      .split("?")[1]
      .split("&")
      .reduce((acc, item) => {
        const splitted = item
          .split("=")
          .map(item => item);
        return { ...acc, [splitted[0]]: splitted[1] };
      }, {});
    return { ...additionalParams, ...paramsFromBase };
  }

  this.params = this.constructParams();
  this.buildParamsString = function() {
    return Object.keys(this.params)
      .reduce((acc, current) => {
        const key = current;
        const value = this.params[current];
        return [ ...acc, `${ encodeURI(key) }=${ encodeURI(value) }` ];
      }, [])
      .join("&");
  }

  this.build = function() {
    if(Object.keys(this.params).length === 0) {
      return `${ this.base }`;
    } else {
      return `${ this.base }?${ this.buildParamsString() }`;
    }
  }
}