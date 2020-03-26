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

        })
    })
})