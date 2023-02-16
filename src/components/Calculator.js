function Calculator() {
  return (
    <div className='container-fluid'>
      <div className='container calculator-area mx-auto justify-content-center border border-primary'>
        <div className='row'>
          <div
            data-previous-operand=''
            type='text'
            className='border border-primary form-control-sm text-end previous-operand shadow'
            disabled=''
          />
        </div>
        <div className='row'>
          <div
            data-current-operand=''
            type='text'
            className='border border-primary form-control-lg col text-end current-operand shadow'
            disabled=''>
            0
          </div>
        </div>
        <div className='row'>
          <button
            data-delete=''
            type='button'
            className='btn btn-outline-danger delete col shadow'
            value='delete'>
            DELETE
          </button>
          <button
            data-all-clear=''
            type='button'
            className='btn btn-outline-danger reset col shadow'
            value='reset'>
            RESET
          </button>
        </div>
        <div className='row'>
          <button
            data-number=''
            type='button'
            className='btn btn-outline-secondary col shadow'
            value={7}>
            7
          </button>
          <button
            data-number=''
            type='button'
            className='btn btn-outline-secondary col shadow'
            value={8}>
            8
          </button>
          <button
            data-number=''
            type='button'
            className='btn btn-outline-secondary col shadow'
            value={9}>
            9
          </button>
          <button
            data-operation=''
            type='button'
            className='btn btn-outline-primary col shadow'
            value='/'>
            /
          </button>
        </div>
        <div className='row'>
          <button
            data-number=''
            type='button'
            className='btn btn-outline-secondary col shadow'
            value={4}>
            4
          </button>
          <button
            data-number=''
            type='button'
            className='btn btn-outline-secondary col shadow'
            value={5}>
            5
          </button>
          <button
            data-number=''
            type='button'
            className='btn btn-outline-secondary col shadow'
            value={6}>
            6
          </button>
          <button
            data-operation=''
            type='button'
            className='btn btn-outline-primary col shadow'
            value='*'>
            *
          </button>
        </div>
        <div className='row'>
          <button
            data-number=''
            type='button'
            className='btn btn-outline-secondary col shadow'
            value={1}>
            1
          </button>
          <button
            data-number=''
            type='button'
            className='btn btn-outline-secondary col shadow'
            value={2}>
            2
          </button>
          <button
            data-number=''
            type='button'
            className='btn btn-outline-secondary col shadow'
            value={3}>
            3
          </button>
          <button
            data-operation=''
            type='button'
            className='btn btn-outline-primary col shadow'
            value='-'>
            -
          </button>
        </div>
        <div className='row'>
          <button
            data-number=''
            type='button'
            className='btn btn-outline-secondary col shadow'
            value='.'>
            .
          </button>
          <button
            data-number=''
            type='button'
            className='btn btn-outline-secondary col shadow'
            value={0}>
            0
          </button>
          <button
            data-equals=''
            type='button'
            className='btn btn-outline-success col shadow'
            value='='>
            =
          </button>
          <button
            data-operation=''
            type='button'
            className='btn btn-outline-primary col shadow'
            value='+'>
            +
          </button>
        </div>
        <div className='row' />
      </div>
    </div>
  );
}

export default Calculator;
