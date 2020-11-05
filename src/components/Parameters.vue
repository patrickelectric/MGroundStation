<template>
  <div class="row border-bottom bd-lightGray m-3">
    <div class="cell-md-4 d-flex flex-align-center">
      <h3 class="dashboard-section-title text-center text-left-md w-100">
        Parameters
      </h3>
    </div>

    <div class="cell-md-8 d-flex flex-justify-center flex-justify-end-md flex-align-center">
      <ul class="breadcrumbs bg-transparent">
        <li class="page-item">
          <a
            href="#"
            class="page-link"
          ><span class="mif-refresh" /> Refresh</a>
        </li>
      </ul>
    </div>
  </div>

  <div class="m-3">
    <div class="">
      <div class="bg-white p-6 text-center text-leader">
        Vehicle parameter table
        <p class="text-leader2">
          Some parameters require vehicle to be restarted, remember to do it if necessary.
        </p>
      </div>
      <br>
      <div class="bg-white p-4">
        <div
          class="d-flex flex-wrap flex-nowrap-lg flex-align-center flex-justify-center flex-justify-start-lg mb-2"
        >
          <div
            id="t1_search"
            class="w-100 mb-2 mb-0-lg"
          />
          <div
            id="t1_rows"
            class="ml-2 mr-2"
          />
        </div>
        <table
          id="t1"
          class="table table-border cell-border"
          data-role="table"
          data-search-wrapper="#t1_search"
          data-rows-wrapper="#t1_rows"
          data-info-wrapper="#t1_info"
          data-pagination-wrapper="#t1_pagination"
          data-horizontal-scroll="true"
        />
        <div class="d-flex flex-column flex-justify-center">
          <div id="t1_info" />
          <div id="t1_pagination" />
        </div>
      </div>
    </div>

    <br>
  </div>
</template>