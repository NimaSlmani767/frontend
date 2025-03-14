<script setup lang="ts">
import * as yup from 'yup'
import moment from 'moment-jalaali'
import { Field, useForm } from 'vee-validate'
import { usePondStore } from '/@src/stores/pond'
import { useNotyf } from '/@src/composable/useNotyf'

const notyf = useNotyf()
const pondStore = usePondStore()

// sampling data
const samplingSchema = yup.object({
  samplingAverageSize: yup.number().required('سایز میانگین الزامی است'),
  samplingDate: yup.date().required('تاریخ ثبت سایز میانگین الزامی است'),
})
const { handleSubmit: samplingHandleSubmit } = useForm({
  validationSchema: samplingSchema,
})
const createSamplingData = samplingHandleSubmit(async (values) => {
  const { samplingAverageSize: averageSize, samplingDate: createdAt } = values

  const result = await pondStore.createSamplingData({
    averageSize: Number(averageSize),
    createdAt: moment(createdAt).utc(),
    pond: pondStore.currentPond.id,
  })
  if (result === 201) {
    notyf.success({
      message: 'اطلاعات ثبت شد.',
      duration: 2000,
    })
  } else {
    notyf.error({
      message: 'اطلاعات ثبت نشده‌اند، دوباره سعی کنید.',
      duration: 2000,
    })
  }
})
</script>

<template>
  <div class="column is-6">
    <form class="form-layout">
      <div class="form-outer">
        <div class="form-header">
          <div class="form-header-inner">
            <div class="left">
              <h3>ثبت اطلاعات نمونه برداری</h3>
            </div>
            <div class="right">
              <div class="buttons">
                <VButton color="primary" @click="createSamplingData" raised>ثبت</VButton>
              </div>
            </div>
          </div>
        </div>
        <div class="form-body">
          <!--Fieldset-->
          <div class="form-fieldset">
            <div class="columns is-multiline">
              <div class="column is-12">
                <Field v-slot="{ field, errorMessage }" name="samplingAverageSize">
                  <VField>
                    <label>سایز میانگین</label>
                    <VControl :has-error="Boolean(errorMessage)">
                      <input
                        v-bind="field"
                        type="text"
                        class="input"
                        placeholder=""
                        autocomplete="given-name"
                      />
                      <p v-if="errorMessage" class="help is-danger">
                        {{ errorMessage }}
                      </p>
                    </VControl>
                  </VField>
                </Field>
              </div>
            </div>
          </div>
          <!--Fieldset-->
          <div class="form-fieldset">
            <div class="columns is-multiline">
              <div class="column is-12">
                <Field v-slot="{ field, errorMessage }" name="samplingDate">
                  <VField>
                    <label>تاریخ ثبت</label>
                    <VControl :has-error="Boolean(errorMessage)">
                      <custom-date-picker
                        v-bind="field"
                        type="datetime"
                        compact-time
                      ></custom-date-picker>
                    </VControl>
                    <p v-if="errorMessage" class="help is-danger">
                      {{ errorMessage }}
                    </p>
                  </VField>
                </Field>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<style lang="scss">
@import '../../../scss/abstracts/mixins';

.is-navbar {
  .form-layout {
    margin-top: 30px;
  }
}

.form-layout {
  max-width: 740px;
  margin: 0 auto;

  .form-outer {
    @include vuero-s-card;

    padding: 0;

    .form-header {
      padding: 12px 20px;
      border-bottom: 1px solid var(--fade-grey-dark-3);
      transition: all 0.3s; // transition-all test

      &.is-stuck {
        background: var(--white);
        padding-right: 80px;
        border-left: 1px solid var(--fade-grey-dark-3);
      }

      .form-header-inner {
        display: flex;
        align-items: center;
        justify-content: space-between;
      }

      .left {
        h3 {
          font-family: var(--font-alt);
          font-size: 1.2rem;
          font-weight: 600;
          line-height: 1.3;
        }

        p {
          font-size: 0.95rem;
        }
      }
    }

    .form-body {
      padding: 20px 40px 40px;
    }
  }
}

.is-dark {
  .form-layout {
    .form-outer {
      @include vuero-card--dark;

      .form-header {
        border-color: var(--dark-sidebar-light-12);

        &.is-stuck {
          background: var(--dark-sidebar);
          border-color: var(--dark-sidebar-light-6);
        }

        .left {
          h3 {
            color: var(--dark-dark-text);
          }
        }
      }

      .form-body {
        .field {
          .control {
            .input,
            .textarea {
              &:focus {
                border-color: var(--primary);
              }
            }
          }
        }
      }
    }
  }
}

.vpd-input-group {
  input {
    height: 38px;
    padding: calc(0.375em - 1px) calc(0.625em - 1px);
    border-radius: var(--radius) !important;
    direction: 'ltr';
  }
  label {
    border-radius: var(--radius) !important;
  }
}

@media only screen and (max-width: 767px) {
  .form-layout {
    .form-outer {
      .form-header {
        .form-header-inner {
          flex-direction: column;

          .left {
            text-align: center;
            margin-bottom: 12px;
          }

          .right {
            width: 100%;

            .buttons {
              display: flex;
              justify-content: space-between;
              margin: 0;

              .button {
                margin: 0;
                width: 49%;
              }
            }
          }
        }
      }
    }
  }

  .vpd-container {
    top: 30%;
    left: 68%;
  }
}
</style>
