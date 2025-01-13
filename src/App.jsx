import AppName from "./components/AppName"
function App() {
  return<center class='todo-container'>
    <AppName/>
    <div class="container text-center">
  
  <div class="row">
    <div class="col-4"><input type="text" placeholder="Enter TODO here"/></div>
    <div class="col-4"><input type="date" /></div>
    <div class="col-2">
    <button type="button" class="btn btn-secondary">Secondary</button>
    </div>
    </div>
  
    <div class="row">
    <div class="col-4"><input type="text" placeholder="Enter TODO here"/></div>
    <div class="col-4"><input type="date" /></div>
    <div class="col-2">
    <button type="button" class="btn btn-danger">Danger</button>

    </div>
    </div>

    <div class="row">
    <div class="col-4"><input type="text" placeholder="Enter TODO here"/></div>
    <div class="col-4"><input type="date" /></div>
    <div class="col-2">
    <button type="button" class="btn btn-danger">Danger</button>

    </div>
    </div>

</div>
  </center>
}

export default App
