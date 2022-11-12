// TODO: move to utils

export type Service = Record<string, any> & {
  state?: Record<string, any>
}

export type ServiceProxy<S> = Service &
  typeof Proxy & {
    [PropertyName in keyof S]: S[PropertyName]
  }

//
// This is not really using the observer pattern, but more the proxy one
// for more sofisticated reactive libraries, use rxjs or mobx.
//
export const createReactiveService = <S extends Service>(
  service: S,
  onStateChange?: (state: S) => void
): ServiceProxy<S> => {
  const handler: ProxyHandler<S> = {
    set: (target: S, prop: string, newValue: any, receiver: any): boolean => {
      throw new Error('Service Proxies are read-only')
    },
    get: (target: S, prop: string, receiver: any) => {
      if (prop in target && prop[0] !== '_') {
        if (typeof target[prop] === 'function') {
          // is a function
          return function (...args: any[]): any {
            const prevState = target.state
            // call function
            const result = target[prop].bind(target).apply(receiver, args)
            if (onStateChange && prevState !== target.state) {
              onStateChange(target)
            }
            return result
          }
        } else {
          // is a property
          return target[prop]
        }
      } else {
        throw new Error('Undefined function')
      }
    },
  }
  return new Proxy<S>(service, handler) as ServiceProxy<S>
}
