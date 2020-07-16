describe("Test Subscribe Process on Unpaid Order", () => {
    beforeEach(() => {
        cy.visit(Cypress.env('quipper_login_page'))
        cy.get('[aria-label="Username or email"]')
          .type(Cypress.env('uname2_testing'))
        cy.get('[aria-label="Password"')
          .type(Cypress.env('pword2_testing'))
        cy.contains('Log In').click()
        //cy.url().should('include', '/dashboard')
    })

    it("#1 Dashboard Showing the Correct Components", () => {
        cy.wait(4000)
        cy.contains('Complete your payment to access the learning materials')
        cy.contains('Check your order')
        cy.get('.AvatarMenu__Toggle--kz3Cn').click()
        cy.contains('Subscriptions').should('have.attr', 'href', Cypress.env('quipper_subscription'))
    }),
    it("#2 Access Subscription Page", () => {
        cy.visit(Cypress.env('quipper_subscription'))
        cy.wait(1000)
        cy.url().should('include', '/subscriptions')
        //cy.contains('Subscriptions').should('have.attr', 'href', '/subscriptions')
        cy.contains('Orders').should('have.attr', 'href', '/orders')
        cy.contains('Redeem Activation Code').should('have.attr', 'href', '/activationcode')
        cy.contains('You do not have any active plans.')
        cy.get('.button.is-info').should('have.attr', 'href', '/plans')
        cy.contains('History').click()
        cy.wait(2000)
        cy.url().should('include', '/subscriptions/history')
    }),
    it("#3 Access Order Page", () => {
        cy.visit(Cypress.env('quipper_subscription'))
        cy.url().should('include', '/subscriptions')
        cy.wait(1000)
        cy.contains('Orders').click()
        cy.url().should('include', '/orders')
        cy.get('.Countdown')
        cy.get('.OrderStatus--pending').click()
        cy.url().should('include', '/orders/')
    }),
    it("#4 Validate on Data Consistency from /Orders Page to Payment Slip", () => {
        cy.visit(Cypress.env('quipper_orders'))
        cy.url().should('include', '/orders')
        cy.wait(1000)
        //Get Ordered Plan Title
        cy.get('.order-plan').then(($title) => {
            const titel = $title.text()
            cy.wrap(titel).as('orderedPlanName')
        })

        //Get Ordered Plan Price
        cy.get('.order-price').then(($price) => {
            const harga = $price.text()
            cy.wrap(harga).as('orderedPlanPrice')
        })

        cy.get('.OrderStatus--pending').click()

        //Get Plan Title from Payment Slip
        cy.get('.AccordionSection__title').then(($nama) => {
            const judul = $nama.text()
            cy.wrap(judul).as('paymentSlipPlanName')
        })

        //Get Plan Price from Payment Slip
        cy.get('.Amount__final').then(($amount) => {
            const bayar = $amount.text()
            cy.wrap(bayar).as('paymentSlipPlanPrice')
        })

        //Validate on Ordered Pricing Plan Title Data
        cy.get('@orderedPlanName').then(orderedPlanName => {
            cy.get('@paymentSlipPlanName').then(paymentSlipPlanName => {
                expect(orderedPlanName).to.equal(paymentSlipPlanName)
            })
        })

        //validate on Ordered Pricing Plan Price Data
        cy.get('@orderedPlanPrice').then(orderedPlanPrice => {
            cy.get('@paymentSlipPlanPrice').then(paymentSlipPlanPrice => {
                expect(orderedPlanPrice).to.equal(paymentSlipPlanPrice)
            })
        })
    }),
    it("#5 Validate on Download Payment Slip PDF from Website", () => {
        cy.visit(Cypress.env('quipper_orders'))
        cy.url().should('include', '/orders')
        cy.wait(1000)
        
        cy.get('.OrderStatus--pending').click()

        cy.location('href').then((loc) => {
            const url = loc.toString()
            cy.wrap(url).as('URL')
        })

        cy.get('@URL').then(URL => {
            const ID1 = URL.split("https://subscribe.quipper.com/orders/")
            const ID = ID1[1]
            cy.wrap(ID).as('IDPaymentSlip')
        })
        
        const downloadFile = Cypress.env('quipper_dl_orders')
        cy.get('@IDPaymentSlip').then(IDPaymentSlip => {
            const linkDL  = downloadFile.concat(IDPaymentSlip)
            const linkDL2 = linkDL.concat("/payment_slip")
            cy.wrap(linkDL2).as('LinkDL')
        })

        cy.get('@LinkDL').then(LinkDL => {
            cy.get('@IDPaymentSlip').then(IDPaymentSlip => {
                const fileName = IDPaymentSlip.concat(".pdf")
                cy.downloadFile(LinkDL, 'downloaded', fileName)
                //cy.wrap(fileName).as('DownloadedFileName')
            })
            
        })
        
        // Test Read PDF File
        // cy.get('@DownloadedFileName').then(DownloadedFileName => {
        //     cy.task('getPdfContent', DownloadedFileName).then(content => {
        //         const teks = content.toString()
        //         cy.wrap(teks).as('KONTEN')
        //     })
        // })

            // cy.task('getPdfContent', '2076398.pdf').then(content => {
            //     const teks = content.toString()
            //     cy.wrap(teks).as('KONTEN')
            // })
        
    }),
    it("#6 Validate on Payment Slip PDF Data from Website", () => {
        cy.visit(Cypress.env('quipper_orders'))
        cy.url().should('include', '/orders')
        
        cy.get('.OrderStatus--pending').click()

        //Get Pricing Plan Title
        cy.get('.AccordionSection__title').then(($judul) => {
            const planTitle = $judul.text()
            cy.wrap(planTitle).as('PricingPlanTitle')
        })

        //Get Pricing Plan Price
        cy.get('.Amount__final').then(($harga) => {
            const planPrice = $harga.text()
            cy.wrap(planPrice).as('PricingPlanPrice')
        })

        //Get Payment Code
        cy.get('.PaymentCode__transaction-ref').then(($code) => {
            const planPayCode = $code.text()
            cy.wrap(planPayCode).as('PaymentCode')
        })

        cy.location('href').then((loc) => {
            const url = loc.toString()
            cy.wrap(url).as('URL')
        })

        cy.get('@URL').then(URL => {
            const ID1 = URL.split("https://subscribe.quipper.com/orders/")
            const ID = ID1[1]
            cy.wrap(ID).as('IDPaymentSlip')
        })

        
        cy.get('@IDPaymentSlip').then(IDPaymentSlip => {
            const fileName = IDPaymentSlip.concat(".pdf")
            cy.wrap(fileName).as('DownloadedFileName')
        })
            
        cy.get('@DownloadedFileName').then(DownloadedFileName => {
            cy.task('getPdfContent', DownloadedFileName).then(content => {
                const teks = content.toString()
                cy.wrap(teks).as('PDFContent')
            })
        })

        //Validate Pricing Plan Title on PDF
        cy.get('@PricingPlanTitle').then(PricingPlanTitle => {
            cy.get('@PDFContent').then(PDFContent => {
                expect(PDFContent).to.contain(PricingPlanTitle)
            })
        })

        cy.get('@PricingPlanPrice').then(PricingPlanPrice => {
            cy.get('@PDFContent').then(PDFContent => {
                expect(PDFContent).to.contain(PricingPlanPrice)
            })
        })

        cy.get('@PaymentCode').then(PaymentCode => {
            cy.get('@PDFContent').then(PDFContent => {
                expect(PDFContent).to.contain(PaymentCode)
            })
        })


    }),
    it("#7 Validate on Change Order Button", () => {
        cy.visit(Cypress.env('quipper_orders'))
        cy.url().should('include', '/orders')
        cy.wait(1000)
        cy.get('.OrderStatus--pending').click()

        cy.contains('Change order').click()
        cy.wait(1000)
        cy.url().should('include', '/plans')
        cy.contains('Check Order')
        cy.contains('Create New Order')

        cy.contains('Check Order').click()
    })
    

    
})