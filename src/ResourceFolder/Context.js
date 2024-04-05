/**
 * 1. create a context as below
 *   
 *  export const dataContext = createContext(null)
 * 
 * 2. Wrap the children component with context provider
 *   
 * const data = {jam: jack}
 * 
 *   <dataContext.provider value={data}>
 *      <childrenComponent></childrenComponent>
 *   </dataContext.provider>
 * 
 * 
 * 3. access context value
 * 
 * import {DataContext} from '.../'
 * const contextData = useContext(DataContext)
 * 
 **/