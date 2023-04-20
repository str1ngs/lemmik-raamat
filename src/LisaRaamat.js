function LisaRaamat() {
    return (
        <form className="LisaRaamat">
        <h4>Lisa uus raamat: </h4>
        <div class="form-group">
          <label for="formGroupExampleInput">Nimetus</label>
          <input type="text" class="form-control" id="formGroupExampleInput" />
        </div>
        <div class="form-group">
          <label for="formGroupExampleInput2">Autor</label>
          <input type="text" class="form-control" id="formGroupExampleInput2" />
        </div>
        <div class="form-group">
          <label for="formGroupExampleInput3">Aasta</label>
          <input
            type="number"
            class="form-control"
            id="formGroupExampleInput3"
          />
        </div>
        <div class="form-group">
          <label for="exampleFormControlTextarea1">Kirjeldus:</label>
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="2"
          ></textarea>
        </div>
        <button type="submit" class="btn btn-primary mt-3">
          Lisa
        </button>
      </form>
    )
}

export default LisaRaamat;