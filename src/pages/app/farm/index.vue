<template>
  <div class="page-content-inner">
    <!-- <TestDashboard /> -->
    <div class="business-dashboard course-dashboard">
      <!--Tile Grid v1-->
      <div class="columns is-multiline tile-grid tile-grid-v2">
        <FarmList />
        <CreateFarmForm />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import '../../../scss/abstracts/mixins';

.course-dashboard {
  .dashboard-title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
    font-family: var(--font);

    &.is-main {
      margin-bottom: 30px;

      h2 {
        font-size: 1.8rem;
      }
    }

    h2 {
      font-family: var(--font-alt);
      font-size: 1.2rem;
      font-weight: 600;
      color: var(--dark-text);
    }
  }

  .course-grid {
    margin-bottom: 2rem;

    .course-card {
      @include vuero-l-card;

      .tag {
        height: 2.75em;
        padding-left: 1rem;
        padding-right: 1rem;
        border-radius: 0.5rem;
        line-height: 2.7;
        margin-bottom: 2rem;
      }

      h3 {
        font-family: var(--font-alt);
        font-size: 1.1rem;
        font-weight: 600;
        color: var(--dark-text);
        margin-bottom: 1rem;
      }

      .students {
        display: flex;
        align-items: center;
        padding: 2rem 0;

        .v-avatar {
          margin: 0 0.25rem;

          .avatar {
            &.is-fake {
              span {
                position: relative;
                left: -2px;
                [dir='rtl'] & {
                  left: unset;
                  right: -2px;
                }
              }
            }
          }
        }

        .link {
          font-family: var(--font);
          font-weight: 500;
          color: var(--primary);
          margin-left: 1rem;
          [dir='rtl'] & {
            margin-left: unset;
            margin-right: 1rem;
          }
        }
      }

      .attached-block {
        + .attached-block {
          margin-top: 1.5rem;
        }

        > a {
          font-family: var(--font);
          font-weight: 500;
          color: var(--primary);
          margin-bottom: 0.5rem;
        }

        .block-stats {
          display: flex;
          color: var(--light-text);

          + .block-stats {
            margin-top: 0.25rem;
          }

          span {
            font-family: var(--font);
            display: flex;
            align-items: center;
            margin-right: 0.75rem;
            [dir='rtl'] & {
              margin-left: 0.75rem;
              margin-right: unset;
            }

            svg {
              height: 15px;
              width: 15px;
              stroke-width: 1px;
              margin-right: 0.25rem;
              [dir='rtl'] & {
                margin-left: 0.25rem;
                margin-right: unset;
              }
            }
          }
        }
      }

      .action-block {
        margin-top: 2.5rem;

        .button {
          height: 46px;
          border-radius: 0.75rem;
        }
      }
    }
  }

  .tile-grid {
    .tile-grid-item {
      margin-bottom: 1rem;
    }
  }

  .flex-table {
    .flex-table-item {
      border-radius: 1rem;
      padding: 1rem;
      margin-bottom: 1rem;

      .tag {
        height: 2.75em;
        padding-left: 1rem;
        padding-right: 1rem;
        border-radius: 0.5rem;
        line-height: 2.7;
      }

      .action-button {
        border-radius: 0.75rem;

        &:hover,
        &:focus {
          background: var(--primary);
          border-color: var(--primary);
          color: var(--white);
          box-shadow: var(--primary-box-shadow);
        }
      }
    }
  }
}

.tile-grid {
  .columns {
    margin-left: -0.5rem !important;
    margin-right: -0.5rem !important;
    margin-top: -0.5rem !important;
  }

  .column {
    padding: 0.5rem !important;
  }
}

.tile-grid-v2 {
  .tile-grid-item {
    @include vuero-s-card;

    border-radius: 14px;
    padding: 16px;
    cursor: pointer;

    &:hover,
    &:focus {
      border-color: var(--primary);
      box-shadow: var(--light-box-shadow);
    }

    .tile-grid-item-inner {
      display: flex;
      align-items: center;

      > img {
        display: block;
        width: 50px;
        height: 50px;
        min-width: 50px;
      }

      .meta {
        margin-left: 10px;
        [dir='rtl'] & {
          margin-left: unset;
          margin-right: 10px;
        }
        line-height: 1.4;

        span {
          display: block;
          font-family: var(--font);

          &:first-child {
            color: var(--dark-text);
            font-family: var(--font-alt);
            font-weight: 600;
            font-size: 1rem;
          }

          &:nth-child(2) {
            display: flex;
            align-items: center;

            span {
              display: inline-block;
              color: var(--light-text);
              font-size: 0.8rem;
              font-weight: 400;
            }

            .icon-separator {
              position: relative;
              font-size: 4px;
              color: var(--light-text);
              padding: 0 6px;
            }
          }
        }
      }

      .dropdown {
        margin-left: auto;
        [dir='rtl'] & {
          margin-left: unset;
          margin-right: auto;
        }
      }
    }
  }
}

.is-dark {
  .course-dashboard {
    .course-grid {
      .course-card {
        @include vuero-card--dark;
      }
    }
  }

  .tile-grid {
    .tile-grid-item {
      @include vuero-card--dark;
    }
  }

  .tile-grid-v2 {
    .tile-grid-item {
      @include vuero-card--dark;

      &:hover,
      &:focus {
        border-color: var(--primary) !important;
      }
    }
  }
}

@media only screen and (max-width: 767px) {
  .course-dashboard {
    .dashboard-title {
      flex-direction: column;

      .left {
        margin-bottom: 1rem;
      }
    }
  }
}
</style>
