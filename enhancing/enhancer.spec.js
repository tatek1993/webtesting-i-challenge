const enhancer = require('./enhancer.js');
// test away!

it('should run the tests', function() {
    expect(true).toBe(true);
});

describe('enhancer.js', function() {

    describe('.repair()', function() {

        it('should return a new item with a durability of 100', function() {
            
            // expect(enhancer.repair({durability: 0}).durability).toBe(90);
            expect(enhancer.repair({durability: 30}).durability).toBe(100);
            expect(enhancer.repair({durability: 84}).durability).toBe(100);
            expect(enhancer.repair({durability: 0}).durability).toBe(100);

        })
    });

    describe('.succeed()', function() {
        it('should increase enhancement by 1', function() {

            // expect(enhancer.succeed({enhancement: 5}).enhancement).toBe(11);
            expect(enhancer.succeed({enhancement: 3}).enhancement).toBe(4);
            expect(enhancer.succeed({enhancement: 10}).enhancement).toBe(11);

        });

        it('should not change if enhancement is 20', function() {
            // expect(enhancer.succeed({enhancement: 20}).enhancement).toBe(19);
            expect(enhancer.succeed({enhancement: 20}).enhancement).toBe(20);

        });

        it('should not make any changes to durability', function() {

            // expect(enhancer.succeed({enhancement: 10, durability: 50}).durability).toBe(51);
            expect(enhancer.succeed({enhancement: 10, durability: 50}).durability).toBe(50);
        })
    });

    describe('.fail()', function() {
        it('should decrease the durability by five if the enhancement is less than 15', function() {

            // expect(enhancer.fail({enhancement: 10, durability: 50}).durability).toBe(56); 

            expect(enhancer.fail({enhancement: 10, durability: 50}).durability).toBe(45);
            expect(enhancer.fail({enhancement: 14, durability: 78}).durability).toBe(73);
            expect(enhancer.fail({enhancement: 3, durability: 12}).durability).toBe(7); 
            expect(enhancer.fail({enhancement: 8, durability: 32}).durability).toBe(27);   

        });

        it('should decrease the durability by 10 if the enhancement is greater than or equal to 15 ', function() {

            // expect(enhancer.fail({enhancement: 16, durability: 50}).durability).toBe(45);

            expect(enhancer.fail({enhancement: 16, durability: 50}).durability).toBe(40);
            expect(enhancer.fail({enhancement: 15, durability: 74}).durability).toBe(64);
            expect(enhancer.fail({enhancement: 18, durability: 96}).durability).toBe(86);

        });

        it('should decrease the enhancement by one if it is over 16', function() {
            // expect(enhancer.fail({enhancement: 18}).enhancement).toBe(19);
            expect(enhancer.fail({enhancement: 18}).enhancement).toBe(17);
            expect(enhancer.fail({enhancement: 17}).enhancement).toBe(16);
        })
    })
})